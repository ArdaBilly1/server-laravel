<?php

namespace App\Http\Controllers;

use App\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $student = Student::all();
        return $student -> toJson();
    }
    public function create()
    {
        // ! progressing by json
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nama' => 'required',
            'kelas' => 'required',
            'nim' => 'required',
            'alamat' => 'required',
          ]);
   
          $project = \App\Student::create([
            'nama' => $validatedData['nama'],
            'kelas' => $validatedData['kelas'],
            'nim' => $validatedData['nim'],
            'alamat' => $validatedData['alamat']
          ]);
   
          $msg = [
              'success' => true,
              'message' => 'Data Mahasiswa berhasil dibuat!'
          ];
   
          return response()->json($msg); 
    }

   public function getStudent( $id) //edit dan view data murid
   {
    $student = \App\Student::find($id);
 
    return $student->toJson();
   }

    public function update(Request $request, Student $student)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
          ]);
   
          $article = \App\Student::find($student);
          $article->nama = $validatedData['nama'];
          $article->kelas = $validatedData['kelas'];
          $article->nim = $validatedData['nim'];
          $article->alamat = $validatedData['alamat'];
          $article->save();
   
          $msg = [
              'success' => true,
              'message' => 'Data murid berhasil di ubah1'
          ];
   
          return response()->json($msg);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Student  $student
     * @return \Illuminate\Http\Response
     */
    public function delete($id)
    {
        $student = \App\Student::find($id);
        if(!empty($student)){
            $student->delete();
            $msg = [
                'success' => true,
                'message' => 'Data murid sudah dihapus!'
            ];
            return response()->json($msg);
        } else {
            $msg = [
                'success' => false,
                'message' => 'Data Murid gagal dihapus!'
            ];
            return response()->json($msg);
        }
    }
}
