import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import articleOrder from "../doc-order/doc-order"
import articleOrder2 from "../doc-order/doc-order2"


export default function Articles() {

  return (
    <div>


      {articleOrder2.map(index => (
        <div>

          <h4>{Object.keys(index)}</h4>


          {Object.values(index)[0].map(index => {

            if (Object.keys(index)[0] === 'external url') {
              return (

                <div>
                  <p>{Object.values(index)[0].name} (url: {Object.values(index)[0].url})***</p>
                </div>

              )

            } else if ((typeof index === 'object') && (Object.keys(index)[0] !== 'external url')) {
              console.log(Object.keys(index)[0])
              return (<div>
                <p>{Object.keys(index)} ►</p>
                {Object.values(index)[0].map(index => (
                  <p>     --- {Object.values(index)}</p>
                ))}</div>)
            }
            else {
              return (
                <div>
                  <p>{index}</p>
                </div>
              )
            }
          }

          )}
        </div>
      ))
      }
    </div>)
}