import React from 'react'

const ContentSide = (props) => {
    return (
    <>
              
                        <div className="content_side_list_item">
                            <img className="content_side_list_item_img" src={props.img} alt={props.title} />
                            <h5 className="content_side_list_item_title">{props.title}</h5>
                            <p className="content_side_list_item_text">{props.text}</p>
                        </div>

            </>
            )
}

            export default ContentSide