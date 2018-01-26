<template>
  <v-app>
    <v-dialog value='true' persistent='' max-width="500px">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">Login</div>
          </div>
        </v-card-title>
        <v-form v-model="valid" v-on:submit.prevent="onSubmit" full>
          <v-card-text>
            <v-text-field
              type="email"
              label="E-mail"
              v-model="form.email"
              :rules="rules.email"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              label="Senha"
              v-model="form.senha"
              :rules="rules.senha"
              required
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-alert outline color="error" icon="warning" :value="this.$store.state.auth.loginError" transition="scale-transition">
              E-mail ou senha são inválidos.
            </v-alert>
          </v-card-actions>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat>Esqueceu sua senha?</v-btn>
            <!-- <v-btn type="submit" color="green darken-3" :disabled="!valid" dark>Entrar</v-btn> -->
            <v-btn
              type="submit"
              color="secondary"
              :loading="this.$store.state.auth.loading"
              :disabled="this.$store.state.auth.loading"
            >
              Entrar
            </v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        valid: false,
        form: {
          email: '',
          senha: '',
        },
        rules: {
          email: [
            v => !!v || 'E-mail é obrigatório',
            v => /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v) || 'E-mail deve ser válido',
          ],
          senha: [
            v => !!v || 'Senha é obrigatório',
            v => v.length >= 6 || 'Senha deve ser maior que 5 caracteres',
          ],
        },
      };
    },
    methods: {
      onSubmit() {
        if (this.valid && !this.$store.state.auth.loading) {
          this.$store.dispatch('auth/login', this.form);
        }
      },
    },
  };
</script>

<style scoped lang="scss">
  .alert {
    width: 100%;
  }
</style>
