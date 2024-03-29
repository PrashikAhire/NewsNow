import React from 'react'

const NewsItem = (props)=> {
    let {title ,description,imageUrl,newsUrl,source ,author,date} = props;
    return (
      <>
      <div>
        <div className="card my-3">
          <div style={{
            display : 'flex',
            justifyContent :'flex-end',
            position:'absolute',
            right : '0'

          }}>
        <span className="badge rounded-pill bg-danger">
    {source}</span>
    </div>
            <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjDOkRFnfaY9S4kzuC5YmRVRSJjwrgCIyeg&usqp=CAU":imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author} Last updated {new Date(date).toGMTString()} ago</small></p>

                <a href={newsUrl} target = "_blank"  rel="noreferrer" className=" btn btn-sm btn-primary" >Read More</a>
            </div>
        </div>
      </div>
      </>
    )
  
}

export default NewsItem
