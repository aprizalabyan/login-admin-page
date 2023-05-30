<template>
  <div class="col-12 px-4 py-2">
    <div class="d-flex flex-column flex-sm-row gap-2 align-items-start align-items-sm-end justify-content-between mt-3 mb-4">
      <h5 class="mb-0">USER MANAGEMENT</h5>
      <span>Logoispsum / Usermanagement</span>
    </div>
    <div class="d-flex flex-column flex-md-row gap-2 align-items-start align-items-md-center justify-content-between mt-3 mb-4">
      <form class="searchBar d-flex col-10 col-sm-8 col-md-6 col-lg-3 align-items-center" role="search">
        <Icon icon="iconamoon:search" width="24" height="24" />
        <input class="form-control me-2" v-model="search" @input="searchUser" placeholder="Search user management"
          aria-label="Search">
      </form>
      <button class="btnAdd mt-2" data-bs-toggle="modal" data-bs-target="#modalAddUser">Add User</button>
      <div class="modal fade" id="modalAddUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" @click="cancelForm" data-bs-dismiss="modal"
                aria-label="Close"></button>
            </div>
            <div class="modal-body px-5">
              <h5>User Management</h5>
              <span>If you need more info, please check Project Guidelines.</span>
              <form @submit.prevent="addUser">
                <div class="mt-3 mb-3">
                  <label class="form-label mb-2" for="name">Name <span
                      style="color: var(--primaryColor);">*</span></label>
                  <input id="name" class="form-control" type="text" placeholder="Input Name"
                    v-model="addUserForm.name" required />
                </div>
                <div class="mb-3">
                  <label class="form-label mb-2" for="username">Username <span
                      style="color: var(--primaryColor);">*</span></label>
                  <input id="username" class="form-control" type="text" placeholder="Input Username"
                    v-model="addUserForm.username" required />
                </div>
                <div class="mb-3">
                  <label class="form-label mb-2" for="email">Email <span
                      style="color: var(--primaryColor);">*</span></label>
                  <input id="email" class="form-control" type="email" placeholder="Input Email"
                    v-model="addUserForm.email" required />
                </div>
                <div class="mb-3">
                  <label class="form-label mb-2" for="gender">Gender <span
                      style="color: var(--primaryColor);">*</span></label>
                  <select id="gender" class="form-select" v-model="addUserForm.gender" required>
                    <option disabled selected value="">Choose Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div class="d-flex justify-content-end gap-2 pb-4">
                  <button type="button" class="btn" @click="cancelForm" data-bs-dismiss="modal">Cancel</button>
                  <button type="submit" class="btnAdd">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mb-5 overflow-x-auto d-grid">
      <ul class="list-group list-group-horizontal listHeader mb-2">
        <li class="list-group-item col-3">Name</li>
        <li class="list-group-item col">Username</li>
        <li class="list-group-item col">Email</li>
        <li class="list-group-item col-1">Gender</li>
        <li class="list-group-item col-2">Last Update</li>
        <li class="list-group-item col-1">Action</li>
      </ul>
      <div id="spinner" v-if="isLoading" class="d-flex justify-content-center my-4" >
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
      <ul class="list-group list-group-horizontal mb-2" v-for="user in displayedUsers" :key="user.id">
        <li class="list-group-item col-3"><img :src="user.image" alt="" class="h-100 me-2" />{{ user.firstName }} {{
          user.lastName }}</li>
        <li class="list-group-item col">@{{ user.username }}</li>
        <li class="list-group-item col">{{ user.email }}</li>
        <li class="list-group-item col-1">{{ upperCase(user.gender) }}</li>
        <li class="list-group-item col-2">May 27, 08:30:04</li>
        <li class="list-group-item col-1">
          <div class="dropdown">
            <button class="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <Icon icon="tabler:dots" />
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li><button class="btn dropdown-item" @click="() => editUser(user.id)" data-bs-toggle="modal"
                  data-bs-target="#modalAddUser">
                  <Icon icon="mi:edit" width="18" height="18" class="me-2" />Edit
                </button></li>
              <li><button class="btn dropdown-item" @click="() => deleteUser(user.id)">
                  <Icon icon="mi:delete" width="18" height="18" class="me-2" />Delete
                </button></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="d-flex flex-column flex-md-row justify-content-between mb-5 gap-3 gap-md-0">
      <span>Showing {{ displayedUsers.length }} of {{ totalUsers }} users</span>
      <paginate :page-count="maxPage" :page-range="3" :margin-pages="1" :click-handler="clickCallback"
        :prev-text="'<'" :next-text="'>'" :container-class="'pagination gap-1'" :page-class="'page-item'">
      </paginate>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue'
import Paginate from 'vuejs-paginate-next'

const usersAPI = 'https://dummyjson.com/users'

export default {
  name: "UserManagementPage",
  components: {
    Icon,
    paginate: Paginate
  },
  computed: {
    displayedUsers: function () {
      const startIndex = this.pageIndex * this.rowsPerPages
      const endIndex = startIndex + this.rowsPerPages
      return this.users.slice(startIndex, endIndex)
    },
    maxPage: function () {
      return Math.ceil(this.users.length / this.rowsPerPages)
    },
    totalUsers: function () {
      return this.users.length
    }
  },
  methods: {
    getUsers() {
      this.isLoading = true
      setTimeout(() => {
        fetch(usersAPI)
          .then(res => res.json())
          .then(data => this.users = data.users)
          .then(() => this.isLoading = false)
      }, 1000)
    },
    searchUser() {
      fetch(usersAPI + '/search?q=' + this.search)
        .then(res => res.json())
        .then(data => this.users = data.users)
    },
    addUser() {
      if (this.isEdit.status) {
        fetch(usersAPI + '/' + this.isEdit.idEdited, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: this.addUserForm.name,
            username: this.addUserForm.username,
            email: this.addUserForm.email,
            gender: this.addUserForm.gender
          })
        })
          .then(res => res.json())
          .then(console.log, alert('Berhasil Update User'))
      } else {
        fetch(usersAPI + '/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: this.addUserForm.name,
            username: this.addUserForm.username,
            email: this.addUserForm.email,
            gender: this.addUserForm.gender
          })
        })
          .then(res => res.json())
          .then(console.log, alert('Berhasil Menambah User'))
      }
      this.addUserForm.name = '', this.addUserForm.username = '', this.addUserForm.email = '', this.addUserForm.gender = ''
      this.isEdit.status = false
    },
    editUser(idEdit) {
      let findUser = this.users.find(us => us.id === idEdit)
      this.addUserForm.name = findUser.firstName + ' ' + findUser.lastName
      this.addUserForm.username = findUser.username
      this.addUserForm.email = findUser.email
      this.addUserForm.gender = findUser.gender
      this.isEdit.idEdited = idEdit
      this.isEdit.status = true
    },
    deleteUser(idDelete) {
      fetch(usersAPI + '/' + idDelete, {
        method: 'DELETE',
      })
        .then(res => res.json())
        .then(console.log, alert('Berhasil Hapus User'));
    },
    cancelForm() {
      this.addUserForm.name = '', this.addUserForm.username = '', this.addUserForm.email = '', this.addUserForm.gender = ''
    },
    clickCallback(pageNum) {
      this.pageIndex = pageNum - 1
    },
    upperCase(str) {
      const up = '' + str
      return up.charAt(0).toUpperCase() + up.slice(1)
    }
  },
  data() {
    return {
      users: [],
      pageIndex: 0,
      rowsPerPages: 7,
      search: '',
      addUserForm: { name: '', username: '', email: '', gender: '' },
      isEdit: { idEdited: '', status: false },
      isLoading: false
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>