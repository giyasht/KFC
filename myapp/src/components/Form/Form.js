import React from 'react'
import './form.css'

const FormField = ({label, labelStyle, htmlFor, type, id, name, placeholder, defaultValue}) => {
    return (
        <div className="col-lg-6">
            <div className="form-group">
                <label className="form-control-label" htmlFor={htmlFor} style={labelStyle}>{label}</label>
                <input type={type} className="form-control" id={id} name={name} placeholder={placeholder} defaultValue={defaultValue} style={{borderBottom:"0px"}} />
            </div>
        </div>
    )
}

const TextArea = ({label, labelStyle, htmlFor, type, row, id, name, placeholder, defaultValue}) => {
    return (
        <div className="form-group focused">
            <label className="form-control-label" htmlFor={htmlFor} >{label}</label>
            <textarea rows={row} type={type} className="form-control form-control-alternative" id={id} name={name} placeholder={placeholder}>{defaultValue}</textarea>
        </div>
    )

}

const Profile = () => {
    return (
        <div className="col-xl-4 order-xl-2 mb-5 mb-xl-0">
            <div className="card card-profile shadow">
                <div className="row justify-content-center">
                    <div className="card-profile-image">
                        <img src="/static/images/default.jpg" className="avatar1" alt="" />                                    
                    </div>
                </div>
                <div className="card-body pt-0 pt-md-4">
                    <div className="text-center">
                        <h2 className="makecapital">Admin <span className="font-weight-light"></span></h2>
                        <h4 className="makecapital">P@gmail.com</h4>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                                <div>
                                    <span className="heading">1</span>
                                    <span className="description">MY BLOGS</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


const Form1 = () => {

    let firstNameProps = {
        label:"First Name",
        htmlFor:"first_name",
        type:"text",
        id:"first_name",
        name:"first_name",
        placeholder:"Enter First Name",
        defaultValue:"Pawan",
    }

    let lastNameProps = {
        label:"Last Name",
        htmlFor:"last_name",
        type:"text",
        id:"last_name",
        name:"last_name",
        placeholder:"Enter Last name",
        defaultValue:"Jaiswal",
    }

    let genderProps = {
        label:"Gender",
        htmlFor:"gender",
        type:"text",
        id:"gender",
        name:"gender",
        placeholder:"Enter Gender",
        defaultValue:"Male",
    }

    let profileImageProps = {
        label:"Upload Profile Image",
        // {/* style={{border: "1px solid #ccc",display: "inline-block",padding: "6px 12px",cursor: "pointer"}} */}
        htmlFor:"gender",
        type:"text",
        id:"pic",
        name:"pic",
        placeholder:"Choose Image",
        defaultValue:"",
    }

    let professionProps = {
        label:"Profession",
        htmlFor:"profession",
        type:"text",
        id:"profession",
        name:"profession",
        placeholder:"Enter Profession",
        defaultValue:"",
    }

    let instagramProps = {
        label:"Instagram",
        htmlFor:"instagramurl",
        type:"text",
        id:"instagramurl",
        name:"instagramurl",
        placeholder:"Enter Instagram ID",
        defaultValue:"",
    }

    let facebookProps = {
        label:"Facebook",
        htmlFor:"facebookurl",
        type:"text",
        id:"facebookurl",
        name:"facebookurl",
        placeholder:"Enter Facebook Username",
        defaultValue:"",
    }

    let linkdinProps = {
        label:"Linkdin",
        htmlFor:"linkdinurl",
        type:"text",
        id:"linkdinurl",
        name:"linkdinurl",
        placeholder:"Enter Linkdin Username",
        defaultValue:"",
    }

    let bioProps = {
        label:"Bio",
        row:"6",
        type:"text",
        id:"bio",
        name:"bio",
        placeholder:"A few words about you ...",
    }

    return (
        <>
            <form method="POST" encType="multipart/form-data">
                <div className="row">
                    <FormField {...firstNameProps}/>
                    <FormField {...lastNameProps} />
                </div>           
                <div className="row">
                    <FormField {...genderProps}/>
                    <FormField {...profileImageProps}/>
                </div>
                <div className="row">
                    <FormField {...professionProps}/>
                </div>

                            
                <hr className="my-4" />
                <h6 className="heading-small text-muted mb-4">Social Media Handles</h6>
                
                <div className="pl-lg-4">
                    <div className="row">
                        <FormField {...instagramProps}/>
                        <FormField {...facebookProps}/>
                        <FormField {...linkdinProps}/>
                    </div>
                </div>
                <hr className="my-4"/>
                <h6 className="heading-small text-muted mb-4">About me</h6>

                <div className="pl-lg-4">
                    <TextArea {...bioProps} />
                    {/* <div className="form-group focused">
                        <label for="bio">Bio</label>
                        <textarea rows="4" className="form-control form-control-alternative" id="bio" name="bio" placeholder="A few words about you ...">Bio</textarea>
                    </div> */}
                </div>
                <div className="pl-lg-4">
                    <div className="form-group focused"></div>
                </div>
                <button type="submit" className="btn btn-info text-center" style={{alignItems: "centerName"}}>Update profile</button>
            </form>
        </>
    )
}

const Form = () => {
    return (
        <>
            <div className="main-content">
                <div className="container-fluid">
                    <div className="row">
                        <Profile />

                        <div className="col-xl-8 order-xl-1">
                            <div className="card bg-secondary shadow">
                                <div className="card-header bg-white border-0">
                                    <div className="row align-items-center">
                                        <div className="col-8">
                                            <h3 className="mb-0">My account</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card-body">
                                <h6 className="heading-small text-muted mb-4">User information</h6>
                                <div className="pl-lg-4">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group focused">
                                                <label className="form-control-label" for="input-username">Username</label>
                                                <input type="text" id="input-username" className="form-control form-control-alternative" placeholder="Username" value="{{request.user.username}}" style={{borderBottom:"0px"}} readonly />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="form-control-label" for="input-email">Email Address</label>
                                                <input type="email" id="input-email" className="form-control form-control-alternative" placeholder="Email" value="{{request.user.email}}" style={{borderBottom:"0px"}} readonly />
                                            </div>
                                        </div>
                                    </div>
                                    <Form1/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{marginTop: "200px"}}></div>
        </>
    )
}

export default Form;

export {
    FormField,
}