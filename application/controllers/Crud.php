<?php
class Crud extends CI_Controller
{
  public function __construct()
  {
    parent::__construct();
    $this->load->database();
    $this->load->model('crud_model');
    $this->load->helper('url'); // Make sure the URL helper is loaded
    $this->load->library('session');
  }



  // LOGIN FUNCTION
  public function userLogin()
  {
    // Check if the request method is POST
    if ($this->input->server('REQUEST_METHOD') === 'POST') {
      $data = array(
        'email' => $this->input->post('email'),
        'password' => $this->input->post('password')
      );
      $user = $this->crud_model->validateUser($data);
      if ($user) {
        // Redirect to the home page after successful login

        $this->session->set_userdata('logged_in', true);
        $this->session->set_userdata('user_email', $user->email);
        $this->session->set_userdata('user_name', $user->fullName);
        $this->session->set_userdata('first_name', $user->firstName);
        $this->session->set_userdata('last_name', $user->lastName);
        $this->session->set_userdata('phone_number', $user->phoneNumber);

        // Update login status in the database
        $this->crud_model->updateLoginStatus($user->email, true);

        redirect(base_url('product'));
      } else {
        $this->load->view('pages/noUsersFound');
      }
    } else {
      // Load the login form view if it's not a POST request
      $this->load->view('pages/login');
    }
  }


  // Logout function
  public function userLogout()
  {
    $email = $this->session->userdata('user_email');
    $this->crud_model->updateLoginStatus($email, false);

    // Destroy session data
    $this->session->sess_destroy();

    redirect(base_url('home'));
  }

  // SINGUP FUNCTION

  // public function savedata() {
  //     // Check if the request method is POST
  //     if ($this->input->server('REQUEST_METHOD') === 'POST') {
  //         $data = array(
  //             'email' => $this->input->post('email'),
  //             'password' => $this->input->post('password')
  //         );
  //         $response = $this->crud_model->saveRecords($data);
  //         if ($response == true) {
  //             // Redirect to the home page after successful login
  //             redirect(base_url('home'));
  //         } else {
  //             echo "Insert Failed";
  //         }
  //     } else {
  //         // Load the login form view if it's not a POST request
  //         $this->load->view('pages/login');
  //     }
  // }

  //  ContactForm

  public function contactForm()
  {
    // Check if the request method is POST
    if ($this->input->server('REQUEST_METHOD') === 'POST') {
      $data = array(
        'firstName' => $this->input->post('firstName'),
        'lastName' => $this->input->post('lastName'),
        'email' => $this->input->post('email'),
        'phoneNumber' => $this->input->post('phoneNumber'),
        'address' => $this->input->post('address'),
        'message' => $this->input->post('message')
      );

      // Assuming this method returns true if data is successfully inserted
      if ($this->crud_model->validateContact($data)) {
        // Set a session flashdata for success message
        $this->session->set_flashdata('status', 'success');
      } else {
        // Set a session flashdata for failure message
        $this->session->set_flashdata('status', 'error');
      }

      // Redirect back to the form page to show the status message
      redirect(base_url('contact'));
    } else {
      echo "Try again";
    }
  }

 // Purchase function
 public function purchase() {
  // Check if the user is logged in
  if (!$this->session->userdata('logged_in')) {
    // Redirect to login page if not logged in
    redirect(base_url('login'));
  }

  // Check if the request method is POST
  if ($this->input->server('REQUEST_METHOD') === 'POST') {
    $data = array(
      'userName' => $this->session->userdata('user_name'),
      'email' => $this->session->userdata('user_email'),
      'productName' => $this->input->post('productName'),
      'productId' => $this->input->post('productId'),
      'quantity' => $this->input->post('quantity'),
      'price' => $this->input->post('price')
    );

    // Assuming this method inserts the purchase data successfully
    if ($this->crud_model->insertPurchase($data)) {
      $this->session->set_flashdata('status', 'Purchase successful!');
    } else {
      $this->session->set_flashdata('status', 'Failed to process the purchase. Please try again.');
    }

    // Redirect back to the product page or another appropriate page
    redirect(base_url('product/' . $data['productId']));
  } else {
    // Handle non-POST requests
    show_404();
  }
}

// Login Status
public function checkLoginStatus()
{
    // Check if the user is logged in
    $isLoggedIn = $this->session->userdata('logged_in') === true;

    // Return the login status along with user data
    echo json_encode(['loggedIn' => $isLoggedIn]);
}

public function placeorder()
{
    // Get the JSON data from the request
    $input = $this->input->raw_input_stream;
    $data = json_decode($input, true);

    
    // Prepare the data for insertion
    $orderData = array(
        'userName' => $data['userName'],
        'userMail' => $data['userMail'],
        'productId' => $data['productId'],
        'productName' => $data['productName'],
        'quantity' => $data['quantity'],
        'totalPrice' => $data['totalPrice'],
        'orderId' => $data['orderId'],
        'firstName' => $data['address']['firstName'],
        'lastName' => $data['address']['lastName'],
        'phoneNumber' => $data['address']['phone'],
        'address' => $data['address']['address'],
        'city' => $data['address']['city'],
        'state' => $data['address']['state'],
        'pincode' => $data['address']['pincode'],
    );

    // Insert the order data into the database
    if ($this->db->insert('ordersList', $orderData)) {
        // If insertion is successful
        $response = array('status' => 'success', 'message' => 'Order placed successfully');
    } else {
        // If insertion fails
        $response = array('status' => 'error', 'message' => 'Failed to place order');
    }

    // Return the response as JSON
    echo json_encode($response);
}


public function getUserData(){
  $isLoggedIn = $this->session->userdata('logged_in') === true;
  // Get user email and name from session if logged in
  $userData = [];
  if ($isLoggedIn) {
      $userData = [
          'email' => $this->session->userdata('user_email'),
          'name' => $this->session->userdata('user_name')
      ];
  }
  echo json_encode(['loggedIn' => $isLoggedIn, 'userData' => $userData]);

}

}
