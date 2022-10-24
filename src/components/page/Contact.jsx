import React  from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

const Contact = () => {
        const { values, errors, touched, handleBlur, handleChange, handleSubmit } = 
          useFormik({
            initialValues,
            validationSchema: Yup.object({
                name: Yup.string().min(2).max(25).required("Please enter your name"),
                email: Yup.string().email().required("Please enter your email"),
                subject: Yup.string().min(5).required("Please enter your Subject"),
                message: Yup.string().min(15).required("Please enter your message "),
              }),
            onSubmit: async (values, action) => { 
                const {name,email,subject,message} = values; 
              const res = await fetch('https://portfolio-fd773-default-rtdb.firebaseio.com/contact.json',{
                method:'POST',
                headers:{'Content-Type' : 'application/json'},
                body:JSON.stringify({name,email,subject,message})
              })
              if(res.ok) toast.success('Your message has been send... Please wait for response.');
              else toast.error('some issues in this from..')
              action.resetForm();
            },
          });
  return (
    <>
      <div className="contact wow fadeInUp" data-wow-delay="0.1s" id="contact">
      <ToastContainer position="top-left"/>
            <div className="container-fluid">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4"></div>
                        <div className="col-md-8">
                            <div className="contact-form">
                                <div id="success"></div>
                                <form name="sentMessage" onSubmit={handleSubmit} id="contactForm" noValidate="novalidate">
                                    <div className="control-group">
                                        <input type="text" className="form-control" name="name" placeholder="Your Name" value={values.name} onChange={handleChange} onBlur={handleBlur} />
                                              {errors.name && touched.name ? ( <p className="form-error">{errors.name}</p> ) : null} 
                                    </div>
                                    <div className="control-group">
                                        <input type="email" className="form-control" name="email" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
                                            {errors.email && touched.email ? ( <p className="form-error">{errors.email}</p> ) : null}  
                                    </div>
                                    <div className="control-group">
                                    <input type="text" className="form-control" name="subject" placeholder="Your Subject" value={values.subject} onChange={handleChange} onBlur={handleBlur}/>
                                            {errors.subject && touched.subject ? ( <p className="form-error">{errors.subject}</p> ) : null}  
                                    </div>
                                    <div className="control-group">
                                        <textarea className="form-control" name ="message" placeholder="Message"  value={values.message} onChange={handleChange} onBlur={handleBlur} />
                                             {errors.message && touched.message ? ( <p className="form-error">{errors.message}</p> ) : null} 
                                    </div>
                                    <div>
                                        <button className="btn" type="submit" id="sendMessageButton">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact