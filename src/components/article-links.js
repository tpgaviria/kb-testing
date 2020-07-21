import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import data from "../util/doc-order.json"


export default function Articles() {

  return (
    <div>

      {console.log(data)}
      {data.map(index => (
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