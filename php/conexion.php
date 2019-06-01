<?php 
	class conexion
	{	private $server;
		private $user;
		private $clave;
		private $db;
		
		public $conex;
		
		function __construct()
		{	$this->server="127.0.0.1";
			$this->user="root";
			$this->clave="";
			$this->db="colegio";
		}
		public function conectar()
		{
			$this->conex=new mysqli($this->server,$this->user,$this->clave,$this->db);
		}
		public function cerrar()
		{
			$this->conex->close();
		}
	}
?>