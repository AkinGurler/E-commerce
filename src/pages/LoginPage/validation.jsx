import * as yup from "yup"
const validations = yup.object({
  username:yup.string().required("Zorunlu Alan").max(15,"max 15 karakter"),
  password:yup.string().required("Zorunlu alan").min(5,"Parola en az 5 karakter olmalıdır"),
  email:yup.string().email("Geçerli bi email adresi giriniz").required("Zorunlu alan"),
  repassword:yup.string()
  .oneOf([yup.ref('password'), null], 'Passwords must match'),
  name:yup.string().required(),
  surname:yup.string().required(),
 
});
export default validations