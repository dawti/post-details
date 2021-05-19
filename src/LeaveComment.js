import Comment from './Comment';

const LeaveComment = ({commentlist}) => {
    const comments=commentlist;
    return(
    <section id="leave-comments">
        <div className="section-header">
            <h2 className="sec-heading  sec-heading-color float-left">Leave your comments</h2>
        </div>
        <div className="media-contant">
            <div className="media border-0 p-2">
                <img src={require("./images/auther1.jpg").default} alt="John Doe" className="mr-3  mt-3 rounded-circle" style={{ width: 60 }} />
                <div className="media-body">
                    <div className="form-group pt-2">
                        <textarea placeholder="Write a response..." name="msg" id="msg" cols={40} rows={5} className="form-control shadow" defaultValue={"               "} />
                        <div className="pt-3">
                            <a href="#" className="btn btn-round prm-btn font-12 mr-2">POST COMMENT</a>
                        </div>
                    </div>
                    <div className="pt-4 pb-2 sec-heading-color">
                        <h5><b>Recent Comments</b></h5>
                    </div>
                    {
                        comments.map((comment)=>
                        <Comment key={comment.id} userdp={comment.userdp} name={comment.name} time={comment.time} comment={comment.comment} like={comment.like} dislike={comment.dislike}/>)
                    }
                   { /*<Comment userdp={require("./images/auther1.jpg").default} name="Samantha Thomas" 
                    time="2 minutes ago" comment="Sample individual comment." like="1K" dislike="400"
                    />*/}
                    
                    {/**                         <Comment key={comment.id} userdp={require("./images/auther1.jpg").default} name={comment.name} time={comment.time} comment={comment.comment} like={comment.like} dislike={comment.dislike}/>)
*/}
                   
                </div>
            </div>
        </div>
    </section>
  );
}

export default LeaveComment;