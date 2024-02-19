<template>
  <form v-if="isFormVisible" class="client-form" @submit.prevent="onSubmit">
    <div class="form-header">
      <h2>Создание клиента</h2>
    </div>
    <div v-if="showSubmitModal" id="submitModal" :class="['submitModalColor', error ? 'errorModal' : 'successModal']">
      <p>{{submitMsg}}</p>
    </div>
    <div class="form-body">
      <div class="form-section">
        <h3>Личные данные</h3>

        <div class="form-group" :class="{ 'form-group--error': $v.form.lastname.$error }">
            <label>Фамилия* </label>
            <input v-model.trim="$v.form.lastname.$model" />
            <div class="error" v-if="submitted && !$v.form.lastname.required">{{requiredMsg}}</div>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.form.name.$error }">
            <label>Имя* </label>
            <input  v-model.trim="$v.form.name.$model" />
            <div class="error" v-if="submitted && !$v.form.name.required">{{requiredMsg}}</div>
        </div>

        <label for="surname">Отчество </label>
        <input id="surname" v-model="form.surname" >

        <div class="form-group" :class="{ 'form-group--error': $v.form.birthday.$error }">
            <label>Дата рождения* </label>
            <input type="date" v-model.trim="$v.form.birthday.$model" />
            <div class="error" v-if="submitted && (!$v.form.birthday.maxDate || !$v.form.birthday.minDate)">{{errorDatedMsg}}</div>
            <div class="error" v-else-if="submitted && !$v.form.birthday.required">{{requiredMsg}}</div>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.form.phone.$error }">
            <label>Номер телефона* </label>
            <input type="tel" @input="enteringPhoneNumber" placeholder="+7 (___) ___ __ __" v-model.trim="$v.form.phone.$model" />
            <div class="error" v-if="submitted && !$v.form.phone.validPhoneNumber">Неверный формат номера телефона</div>
            <div class="error" v-else-if="submitted && !$v.form.phone.required">{{requiredMsg}}</div>
        </div>

        <label for="sex">Пол</label>
        <select id="sex" v-model="form.sex">
          <option>м</option>
          <option>ж</option>
        </select>

        <div class="form-group" :class="{ 'form-group--error': $v.form.clientsGroup.$error }">
            <label>Группа клиентов* </label>
            <select v-model.trim="$v.form.clientsGroup.$model"  multiple size=2> <!--required -->
              <option>VIP</option>
              <option>Проблемные</option>
              <option>ОМС</option>
            </select>
            <div class="error" v-if="submitted && !$v.form.clientsGroup.required">{{requiredMsg}}</div>
        </div>

        <label for="doctor">Лечащий врач </label>
        <select id="doctor" v-model="form.doctor">
          <option>Иванов</option>
          <option>Захаров</option>
          <option>Чернышова</option>
        </select>

        <p style="text-align: left;">
          <input id="dont-send-sms" type="checkbox" v-model="form.dontSendSMS" style="width: auto;margin-left: auto;" placeholder="">
          <label for="dontSendSMS" style="display: inline-block;">Не отправлять СМС </label>
        </p>    
        
      </div>

      <div class="form-section">
        <h3>Адрес</h3>

        <div class="form-group" :class="{ 'form-group--error': $v.form.index.$error }">
            <label>Индекс </label>
            <input type="number" v-model.trim="$v.form.index.$model" >
            <div class="error" v-if="submitted && !$v.form.index.validLength">Длина должна быть равна 6 знакам</div>
            <div class="error" v-else-if="!$v.form.index.decimal">{{errorNumMsg}}</div>
        </div>

        <label for="country">Страна </label>
        <input id="country" v-model="form.country" placeholder="">

        <label for="region">Область </label>
        <input id="region" v-model="form.region" placeholder="">
        
        <div class="form-group" :class="{ 'form-group--error': $v.form.city.$error }">
            <label>Город* </label>
            <input v-model.trim="$v.form.city.$model" />
            <div class="error" v-if="submitted && !$v.form.city.required">{{requiredMsg}}</div>
        </div>

        <label for="street">Улица </label>
        <input id="street" v-model="form.street" placeholder="">

        <label for="house">Дом </label>
        <input id="house" v-model="form.house" placeholder="">

      </div>

      <div class="form-section">
        <h3>Паспорт</h3>

        <div class="form-group" :class="{ 'form-group--error': $v.form.docType.$error }">
            <label>Тип документа* </label>
            <select v-model.trim="$v.form.docType.$model">
              <option>Паспорт</option>
              <option>Свидетельство о рождении</option>
              <option>Вод. удостоверение</option>
            </select>
            <div class="error" v-if="submitted && !$v.form.docType.required">{{requiredMsg}}</div>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.form.series.$error }">
            <label>Серия </label>
            <input type="number" v-model.trim="$v.form.series.$model" >
            <div class="error" v-if="submitted && !$v.form.series.validLength">Длина должна быть равна 4 знакам</div>
            <div class="error" v-else-if="!$v.form.series.decimal">{{errorNumMsg}}</div>
        </div>

        <div class="form-group" :class="{ 'form-group--error': $v.form.number.$error }">
            <label>Номер </label>
            <input type="number" v-model.trim="$v.form.number.$model" >
            <div class="error" v-if="submitted && !$v.form.number.validLength">Длина должна быть равна 6 знакам</div>
            <div class="error" v-else-if="!$v.form.number.decimal">{{errorNumMsg}}</div>
        </div>

        <label for="issueDep">Кем выдан </label>
        <input id="issue-dep" v-model="form.issueDep" placeholder="">

        <div class="form-group" :class="{ 'form-group--error': $v.form.issueDate.$error }">
            <label>Дата выдачи* </label>
            <input type="date" v-model.trim="$v.form.issueDate.$model" />
            <div class="error" v-if="submitted && (!$v.form.issueDate.maxDate || !$v.form.issueDate.minDate)">{{errorDatedMsg}}</div>
            <div class="error" v-else-if="submitted && !$v.form.issueDate.required">{{requiredMsg}}</div>
        </div>
      </div>
    </div>

    <span style="text-align: left;">*Поле обязательное для заполнения</span>
    <p>
      <input type="submit" value="Отправить">  
    </p>

  </form>
</template>

<script>
import { required, decimal } from 'vuelidate/lib/validators'

export default {
  name: 'ClientForm',
  props: {
    isFormVisible: Boolean
  },
  data () { 
    return { 
      clientsGroupSize: 1,
      submitted: false,
      showSubmitModal: false,
      error: false,
      requiredMsg: 'Поле обязательно для заполнения',
      errorDatedMsg: 'Неправильная дата',
      errorNumdMsg: 'Требуется ввести число',
      form: {
        lastname: '',
        name: '',
        surname: '',
        birthday: '',
        phone: '',
        sex: '',
        clientsGroup: [],
        doctor: '',
        dontSendSMS: false,

        index: '',
        country: '',
        region: '',
        city: '',
        street: '',
        house: '',

        docType: '',
        series: '',
        number: '',
        issueDep: '',
        issueDate: '',
      }
    }; 
  },
  validations: {
    form: {
      lastname: {
        required,
      },
      name: {
        required,
      },
      birthday: {
        required,
        maxDate(value) {
          return value ? new Date(value).toJSON().substring(0,10) <= new Date().toJSON().substring(0,10) : true;
        },
        minDate(value) {
          return value ? new Date(value).toJSON().substring(0,10) >= new Date("1910-01-01").toJSON().substring(0,10) : true;
        }
      },
      phone: {
        required,
        validPhoneNumber(/*value*/) {
          return true;
          //return value[0] === '7' && value.match(/(?:\+|\d)[\d\-() ]{9,}\d/g);
        }
      },
      clientsGroup: {
        required,
      },
      index: {
        decimal,
        validLength(value) {
          return value.length != 0 && value.length == 6;
        }
      },
      city: {
        required,
      },
      docType: {
        required,
      },
      series: {
        decimal,
        validLength(value) {
          return value.length != 0 && value.length == 4;
        }
      },
      number: {
        decimal,
        validLength(value) {
          return value.length != 0 && value.length == 6;
        }
      },
      issueDate: {
        required,
        maxDate(value) {
          return value ? new Date(value).toJSON().substring(0,10) <= new Date().toJSON().substring(0,10) : true;
        },
        minDate(value) {
          return value ? new Date(value).toJSON().substring(0,10) >= new Date("1910-01-01").toJSON().substring(0,10) : true;
        }
      },
    }
  },
  methods: {
    onSubmit() {
      this.submitted = true;
      this.error = false;
      this.submitMsg='Клиент успешно создан!';
      this.$v.$touch();
      if (this.$v.$invalid) {
          this.submitMsg='Ошибка!';
          this.error = true;
          this.showSubmitModal=true;
          setTimeout(() => this.showSubmitModal = false, 2000)
          console.log("Birth:", this.form.birthday)
          return;
      }
      this.showSubmitModal=true;
      setTimeout(() => this.showSubmitModal = false, 2000)

      console.log("Data: \n" + JSON.stringify(this.form));
    },
    enteringPhoneNumber() {
      // var x = this.form.phone.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,4})/);
      // console.log("Val:", x)
      // this.form.phone = x[1] + !x[3] ? x[2] : '(' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '')
      let x = this.form.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.form.phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
    }
  }
}
</script>

<style scoped lang="scss">
  .client-form{
    border: 1px solid;
    width: 60vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
  }
  $back-color: rgb(118, 135, 190);
  .form-header{
    height: 5vh;
    background: $back-color;
    color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .form-header h2 {
    margin: 1vh;
  }
  .client-form label {
    text-align: left;
    display: block;
    padding-top: 0.7vh;
  }
  .client-form select {
    width: 100%;
  }
  .form-section {
    width: 14vw;
  }
  .form-section input{
    display: inline-block;
    width: 100%;
  }
  .form-section h3{
    text-decoration: underline;
  }
  .form-body {
    display: flex;
    justify-content: space-evenly;
  }
  .error {
    color: rgb(228, 123, 123);
  }
  .errorModal {
    background: rgb(230, 115, 115);
  }
  .successModal {
    background: rgb(35, 224, 76);
  }
  #submitModal {
    width: 10vw;
    height: 5vh;
    color: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 5px;
    border: 1px solid black;
  }
</style>
