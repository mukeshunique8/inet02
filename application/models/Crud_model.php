<?php

class Crud_model extends CI_Model
{

  // Save user records during registration
  function saveRecords($data)
  {
    $this->db->insert('users', $data);
    return true;
  }

  // Validate user credentials during login
  public function validateUser($data)
  {
    // Check if user exists with the given email and password
    $this->db->where('email', $data['email']);
    $this->db->where('password', $data['password']);
    $query = $this->db->get('users');
    return $query->row();
  }

  // Update user's login status

  public function updateLoginStatus($email, $status) {
    $data = array( 'isLoggedIn' => $status  );

    $this->db->where('email', $email);
    $this->db->update('users', $data);
}



  // Get user details
  public function getUserByEmail($email)
  {
    $this->db->where('email', $email);
    $query = $this->db->get('users');
    return $query->row(); // Return the user row
  }


  // Update Contact form details
  public function validateContact($data)
  {
      return $this->db->insert('contact_form', $data);
  }
  
 

}

