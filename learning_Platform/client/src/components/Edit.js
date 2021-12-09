import React from 'react'

const Edit = () => {
    return (
        <>
          <div className="edit-page">
            <div className="edit">
                <div className="edit-heading">
                    <h1>Edit Profile</h1>
                </div>
                <div className="labels">
                    <h2>Add Details</h2>
                </div>
                <form className="edit-main-info" >
                    <div className="photo-upload">
                        <div className="placeholders">
                            <label  className="form-label">Profile-Photo</label>
                        </div>
                        <div className="values">
                            <input type="file" className="form-control" aria-label="file example" />
                        </div>
                    </div>
                    <div className="phone">
                        <div className="placeholders">
                        <label  className="form-label">Change-PhoneNo.</label>
                        </div >
                        <div className="values">
                            <input type="number" className="form-control" name="phone" placeholder="phone number" />
                        </div>
                    </div>
                    <div className="profession">
                        <div className="placeholders">
                        <label  className="form-label">Change-Profession</label>
                        </div >
                        <div className="values">
                            <input type="text" className="form-control" name="profession" placeholder="profession" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">SUBMIT</button>
                </form>

                <div className="labels">
                    <h2>Add Work Links</h2>
                </div>
                <form className="edit-work-links" >
                    <div className="work-link-name">
                        <div className="placeholders">
                            <label for="Link-name" className="form-label">Link-Name</label>
                        </div>
                        <div className="values">
                            <input type="text" id="Link-name" className="form-control" placeholder="Link-Name" />
                        </div>
                    </div>
                    <div className="work-link">
                        <div className="placeholders">
                            <label for="Link" className="form-label">Link</label>
                        </div>
                        <div className="values">
                            <input type="text" id="Link" className="form-control" placeholder="Link" />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">ADD</button>
                </form>
                <div className="labels">
                    <h2>Add Timelines</h2>
                </div>
                <form className="edit-Timeline">
                    <div className="Timeline">
                        <div className="placeholders">
                            <label for="msg" className="form-label">Timeline</label>
                        </div>
                        <div className="values">
                            <textarea type="text" id="msg" className="form-control" placeholder="Write Msg" style={{height: 100}}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">ADD</button>
                </form>

            </div>

            </div>
        </>
    )
}

export default Edit
