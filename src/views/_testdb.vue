<template>
  <div>
    <formdb @created="created"></formdb>
    <hr />
    <listdb :contacts="contacts" @deleteContact="deleteContact" @saveEdit="saveEdit"></listdb>
  </div>
</template>

<script>
import formdb from "@/views/_testdb_form.vue";
import listdb from "@/views/_testdb_liste.vue";
import db from "@/db.js";

export default {
  name: "app",
  components: {
    formdb,
    listdb
  },
  data() {
    return {
      contacts: []
    };
  },
  created() {
    this.getAllContacts();
  },
  methods: {
    created(id) {
      console.log(id);
      this.getAllContacts();
    },
    getAllContacts() {
      db.read().then(snapshot => {
        console.log(snapshot.docs);
        this.contacts = snapshot.docs;
      });
    },
    deleteContact(contact) {
      db.delete(contact.id).then(() => {
        this.getAllContacts();
      });
    },
    saveEdit(editedContact) {
      db.update(editedContact).then(() => {
        this.getAllContacts();
      });
    }
  },
  watch: {
    contacts(newContacts) {
      console.log("newContacts", newContacts);
      this.contacts = newContacts;
    }
  }
};
</script>
