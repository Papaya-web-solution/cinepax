<template>
<div class="details">
  <div v-if="!isInEditMode" class="card" style="width: 18rem;margin-bottom: 10px;">
    <div class="card-body">
      <!-- <router-link :to="{ name: 'contact', params: { id: contact.id } }"> -->
        <h5 class="card-title">{{contact.data().lastName}} {{contact.data().firstName}}</h5>
      <!-- </router-link> -->
      <h6 class="card-subtitle mb-2 text-muted">{{contact.data().email}}</h6>
      <p class="card-text">numéro de téléphone : {{contact.data().phone}}</p>
      <button
        class="btn btn-sm btn-warning"
        @click="editContact">
        modifier
      </button>
      <button
        class="btn btn-sm btn-danger"
        @click="$emit('deleteContact', contact)">
        supprimer
      </button>
    </div>
  </div>
  <div v-if="isInEditMode" class="card" style="width: 18rem;margin-bottom: 10px;">
    <div class="card-body">
      <input type="text" v-model="contactCopy.firstName"><br>
      <input type="text" v-model="contactCopy.lastName"><br>
      <input type="text" v-model="contactCopy.email"><br>
      <input type="text" v-model="contactCopy.phone">
      <button
        class="btn btn-sm btn-success"
        @click="saveEdit">
        Save
      </button>
      <button
        class="btn btn-sm btn-warning"
        @click="cancelEdit">
        annuler
      </button>
    </div>
  </div>
  <hr>
</div>
</template>

<script>
export default {
  props: ['contact'],
  data() {
    return {
      isInEditMode: false,
      contactCopy: {},
    };
  },
  created() {
    //console.log(this.contact);
  },
  methods: {
    editContact() {
      /* eslint-disable object-curly-newline */
      const { firstName, lastName, phone, email } = this.contact.data();
      /* eslint-enable object-curly-newline */
      this.contactCopy = {
        id: this.contact.id,
        firstName,
        lastName,
        phone,
        email,
      };
      this.isInEditMode = true;
    },
    saveEdit() {
      this.$emit('saveEdit', this.contactCopy);
      this.isInEditMode = false;
    },
    cancelEdit() {
      this.isInEditMode = false;
    },
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
.details {
  padding: 10px;
}
</style>
