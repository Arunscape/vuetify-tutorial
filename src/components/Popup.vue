<template>
  <v-dialog max-width="600px" v-model="showDialog">
    <v-btn flat slot="activator" class="success">New Project</v-btn>
    <v-card>
      <v-card-title>
        <h2>Add a New Project</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-3" ref="form">
          <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
          <v-textarea label="Information" v-model="info" prepend-icon="edit" :rules="inputRules"></v-textarea>

          <v-menu>
            <v-text-field
              :value="formattedDate"
              slot="activator"
              label="Due date"
              prepend-icon="date_range"
              :rules="inputRules"
            ></v-text-field>
            <v-date-picker v-model="due"></v-date-picker>
          </v-menu>

          <v-spacer/>

          <v-btn flat class="success mx-0 mt-3" @click="submit" :loading="loading">Add Project</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import format from "date-fns/format";
import db from "@/fb";

export default {
  data() {
    return {
      title: "",
      info: "",
      due: null,
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"],
      loading: false,
      showDialog: false
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;

        const project = {
          title: this.title,
          content: this.info,
          due: format(this.due, "Do MMM YYY"),
          person: "The Net Ninja",
          status: "ongoing"
        };

        db.collection("projects")
          .add(project)
          .then(() => {
            this.loading = false;
            this.showDialog = false;
            this.$emit("projectAdded");
          });
      }
    }
  },
  computed: {
    formattedDate() {
      return this.due ? format(this.due, "Do MMM YYYY") : "";
    }
  }
};
</script>
