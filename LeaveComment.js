import Comment from './Comment';

const LeaveComment = () => (
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
                    {/**/}
                    <Comment userdp={require("./images/auther1.jpg").default} name="Samantha Thomas" 
                    time="2 minutes ago" comment="Loved this...Expecting more." like="1K" dislike="400"
                    />
                    
                    
                   
                </div>
            </div>
        </div>
    </section>
);

export default LeaveComment;