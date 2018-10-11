<?php

    class User {

        private $id;
        private $login;
        private $group;

        public function __construct($data) {
            $this->id = $data['id'];
            $this->login = $data['login'];
            $this->group = $data['group'];
        }

        public function getId() {
            return $this->id;
        }

        public function getGroup() {
            return $this->group;
        }

        public function getLogin() {
            return $this->login;
        }

    }

?>