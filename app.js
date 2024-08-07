const frmEmail = document.getElementById("frm-email")
frmEmail.addEventListener("submit",sendEmail)

const serviceId = "service_s9e6u0n" //email services
const templateId = "template_0z8kyfn" //email templates
const apiKey = "25IpPYD8l15Xx45uI"

function sendEmail(event){
    event.preventDefault()
    emailjs.init(serviceId)

    emailjs.sendForm(serviceId,templateId,frmEmail,apiKey)
    .then( (reuslt) => Swal.fire("su mensaje se ha enviado con exito."))
    .catch(error => {
        Swal.fire({
            icon: "error",
            title: "Oopss",
            text : "No ha sido posible enviar el mensaje",
        });
    });
}