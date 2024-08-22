<?php 
class Testdb extends CI_Controller {

    public function index() {
        // Load the database library
        $this->load->database();

        // Test the database connection
        if ($this->db->conn_id) {
            echo "Database connection successful!<br>";
            
            // Display connection details
            echo "Host: " . $this->db->hostname . "<br>";
            echo "Username: " . $this->db->username . "<br>";
            echo "Database: " . $this->db->database . "<br>";
            echo "DB Driver: " . $this->db->dbdriver . "<br>";
        } else {
            echo "Failed to connect to the database.";
        }
    }
}
