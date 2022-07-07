import React from 'react'

//Este props está servindo como um nome de uma variável com o tipo de dado object. Adicionando props.author, por exemplo, entramos na Post e depois no 'author' que colocamos no App.jsx
export const Post = (props) => {

  return (
    <div>
      <strong>{props.author}</strong>
      <strong>{props.author2}</strong>
      <p>{props.content}</p>
      <p>{props.src}</p>
    </div>
  )
}

