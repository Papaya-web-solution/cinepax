<template>
  <div>
    <detaildb
      :contact='contact'
      v-for="contact in contacts"
      @deleteContact="deleteContact"
      @saveEdit="saveEdit"
      :key="contact.data().id">
    </detaildb>
  </div>
</template>

<script>
import detaildb from "@/views/_testdb_details.vue";

export default {
  props: ['contacts'],
  components: {
    detaildb,
  },
  methods: {
    deleteContact(contact) {
      this.$emit('deleteContact', contact);
    },
    saveEdit(editedContact) {
      this.$emit('saveEdit', editedContact);
    },
  },
};
</script>

<style>
</style>
