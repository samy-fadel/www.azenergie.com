import React from 'react'
export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqkvqoop");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
  return (
    <div id='contactform' className='text-center'>
    <div id="contactform" className="text-center section-title">
      <h2 className="mb-3">Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Nom et Prenom
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-danger" type="submit" disabled={state.submitting}>
        </button>
      </form>
    </div>
    </div>
  )
}