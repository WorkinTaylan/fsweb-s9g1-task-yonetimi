import React from 'react';
import {useForm, Controller} from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";


export default function TaskHookForm({kisiler, submitFn}) {

  const notify = () => {
    toast.success("Kaydedildi", {
      position: toast.POSITION.TOP_CENTER,
      theme:"colored"
    });
  }

  const {register, handleSubmit, formState:{errors, isValid}}=useForm({mode:"onBlur", defaultValues:{checkbox:[]}})

  return (
    <form className="taskForm" onSubmit={handleSubmit}>
      <div className="form-line">
        <label className="input-label" htmlFor="title">
          Başlık
        </label>
        <input
          className="input-text"
          id="title"
          type="text"
          {...register("title", {required: "Task Başlığı yazmalısınız", minLength:{value:3, message:"Task başlığı en az 3 karakter olmalı" }})}
        />
       {errors.title && <p className="input-error">{errors.title.message}</p>}
      </div>

      <div className="form-line">
        <label className="input-label" htmlFor="description">
          Açıklama
        </label>
        <textarea
          className="input-textarea"
          rows="3"
          id="description"
          {...register("description", {required:"Task açıklaması yazmalısınız", minLength:{value:10, message:"Task açıklaması en az 10 karakter olmalı"}})}
        >
        </textarea>
        {errors.description && <p className="input-error">{errors.description.message}</p>}
      </div>

      <div className="form-line">
        <label className="input-label">İnsanlar</label>
        <div>
          {kisiler.map((p) => (
            <label className="input-checkbox" key={p}>
              <input
                type="checkbox"
                name="people"
                value={p}
              />
              {p}
            </label>
          ))}
        </div>
        <p>{/*checkbox için mesaj veremedim*/}</p>
      </div>
      <div className="form-line">
        <button
          className="submit-button"
          type="submit"
          disabled={!isValid}
          onClick={notify}
        >
         <ToastContainer/> Kaydet
        </button>
        </div>
      </form>
    )
}
