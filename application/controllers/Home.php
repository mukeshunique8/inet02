<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{

	public function index()
	{
		$data['activePage'] = 'home';
		$this->load->view('templates/header', $data);
		$this->load->view('pages/landing');
		$this->load->view('templates/footer');
	}
	public function contact()
	{
		$data['activePage'] = 'contact';
		$this->load->view('templates/header', $data);
		$this->load->view('pages/contact');
		$this->load->view('templates/footer');
	}
	public function login()
	{
		$this->load->database();
		$data['activePage'] = 'login';
		$this->load->view('templates/header', $data);
		$this->load->view('pages/login');
		$this->load->view('templates/footer');
	}
	public function forgotPassword()
	{
		$data['activePage'] = 'forgotPassword';
		$this->load->view('templates/header', $data);
		$this->load->view('pages/forgotPassword');
		$this->load->view('templates/footer');
	}
	public function product()
	{
		$data['activePage'] = 'product';
		$this->load->view('templates/header', $data);
		$this->load->view('pages/product');
		$this->load->view('templates/footer');
	}
	public function dispatch()
	{
		$data['activePage'] = 'dispatch';
		$this->load->view('templates/header', $data);
		$this->load->view('pages/dispatch');
		$this->load->view('templates/footer');
	}
}
