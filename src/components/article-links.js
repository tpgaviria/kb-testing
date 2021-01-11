import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import data from "../util/doc-order.json"


export default function Articles() {

  return (
    <div class="article-order">

      {console.log(data)}
      {data.map(index => (
        <div>

          <h6>{Object.keys(index)}</h6>


          {Object.values(index)[0].map(index => {

            if (Object.keys(index)[0] === 'external url') {
              return (

                <div>
                  <p class="article-link">{Object.values(index)[0].name} (url: {Object.values(index)[0].url})***</p>
                </div>

              )

            } else if ((typeof index === 'object') && (Object.keys(index)[0] !== 'external url')) {
              return (<div>
                <p class="article-link">{Object.keys(index)} ►</p>
                {Object.values(index)[0].map(index => (
                  <p class="article-link">     --- {Object.values(index)}</p>
                ))}</div>)
            }
            else {
              return (
                <div>
                  <p class="article-link">{index}</p>
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