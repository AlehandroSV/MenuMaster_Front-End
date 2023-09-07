<template>
  <div class="w-screen h-screen">
    <form class="">
      <div>
        <label for="">E-Mail</label>
        <input type="text" placeholder="Email" v-model="state.email" />
        <span v-if="v$.email.$error"> {{ v$.email.$errors[0].$message }} </span>
      </div>
      <div>
        <label for="">Senha</label>
        <input type="password" placeholder="Senha" v-model="state.password" />
        <span v-if="v$.email.$error">
          {{ v$.password.$errors[0].$message }}
        </span>
      </div>

      <button @click="submitForm" type="submit">Entrar</button>
    </form>
    <div class=""></div>
  </div>
</template>

<script lang="ts">
import useValidate from '@vuelidate/core';
import { required, helpers } from '@vuelidate/validators';
import { login } from '../services/Auth';

export default {
  data() {
    return {
      v$: useValidate(),
      email: '',
      password: '',
    };
  },
  methods: {
    async submitForm(e: { preventDefault: () => void }) {
      e.preventDefault();
      this.v$.$validate();

      if (!this.v$.$error) {
        login({
          username: this.state.email,
          password: this.state.password,
        });
      } else {
        alert('Form failed validation');
      }
    },
  },
  setup() {
    const state = reactive({
      email: '',
      password: '',
    });

    const rules = computed(() => {
      return {
        email: {
          required: helpers.withMessage('O E-Mail é obrigatório', required),
        },
        password: {
          required: helpers.withMessage('A Senha é obrigatório', required),
        },
      };
    });

    const v$ = useValidate(rules, state);

    return { state, v$ };
  },
};

definePageMeta({
  middleware: ['unauthenticated'],
});
</script>
