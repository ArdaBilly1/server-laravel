import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';
 
class StudentIndex extends Component {
     
    constructor () {
        super()
        this.state = {
            students: [],
            msg: null,
            type: null,
            flash:false,
            alert: null,
        }
    }
 
    hideAlert() {
        this.setState({
            alert: null
        });
    }
 
    componentDidMount () {
        axios.get('/api/students').then(response => {
            this.setState({
                students: response.data
            })
        })  
    }
 
    confirmDelete(id){
        const getAlert = () => (
            <SweetAlert
                warning
                showCancel
                confirmBtnText="Hapus Deh"
                cancelBtnText="Nggak Jadi"
                confirmBtnBsStyle="danger"
                cancelBtnBsStyle="default"
                title="Tunggu ..."
                onConfirm={() => this.deleteItem(id)}
                onCancel={() => this.hideAlert()}
                focusCancelBtn
                >
                Yakin Dihapus?
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    deleteItem(id) {
        axios.delete(`/api/student/delete/${id}`).then(response => {
            var msg = response.data.success;
            if(msg == true){
                this.hideAlert();
                this.goToHome();
            }
        })
    }
 
    goToHome(){
        const getAlert = () => (
            <SweetAlert
                success
                title="Success!"
                onConfirm={() => this.onSuccess() }
                onCancel={this.hideAlert()}
                timeout={2000}
                confirmBtnText="Oke Siap"
                >
                Deleted article successfully
            </SweetAlert>
        );
        this.setState({
            alert: getAlert()
        });
    }
 
    onSuccess(){
        this.componentDidMount();
        this.hideAlert();
    }
 
    render () {
        const { students } = this.state
        return (
          <div className='container py-4'>
            <div className='row justify-content-center'>
              <div className='col-md-10'>
                <div className='card'>
                  <div className='card-header'>All Student</div>
                  <div className='card-body'>
                    <Link className='btn btn-primary btn-sm mb-3' to='/studentcr'>
                      Create new student data
                    </Link>
                    <div className="table-responsive">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th width="50" className="text-center">No</th>
                                    <th width="200" className="text-center">Nama</th>
                                    <th width="200" className="text-center">Kelas</th>
                                    <th width="200" className="text-center">NIM</th>
                                    <th width="300" className="text-center">Alamat</th>
                                    <th width="300" className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student, i) => (
                                <tr key={i}>
                                    <td width="50" className="text-center">{i + 1}</td>
                                    <td>{student.nama}</td>
                                    <td>{student.kelas}</td>
                                    <td>{student.nim}</td>
                                    <td>{student.alamat}</td>
                                    <td width="200" className="text-center">
                                        <div className="btn-group">
                                        <Link
                                            className='btn btn-primary'
                                            to={`/student1/${student.id}`}
                                            >Detail
                                        </Link>
                                        <Link
                                            className='btn btn-success'
                                            to={`/student1/edit/${student.id}`}
                                            >Edit
                                        </Link>
                                        <button
                                            className='btn btn-danger'
                                            onClick={() => this.confirmDelete(student.id)}
                                            >Delete
                                        </button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                        {this.state.alert}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
 
export default StudentIndex