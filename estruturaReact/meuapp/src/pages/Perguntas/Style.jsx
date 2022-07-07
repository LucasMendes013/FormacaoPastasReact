import React from 'react'

const Style = () => {


    const container = {
      display : 'grid',
    }

      const gridUsuario = {
        gridTemplate: '"ladoEsquerdo ladoEsquerdo ladoDireito" 100px      descricao 200px ',
        backgroundColor: 'gray',

      }

        const ladoEsquerdo = {
          gridArea: 'ladoEsquerdo',

        }

          const ladoDireito = {
            gridArea: 'ladoDireito'
          }

            const descricao = {
              gridArea: 'descricao'
            }



  return (
    <div>Style</div>
  )
}

export default Style