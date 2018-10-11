<?php

    class User {

        private $id;
        private $login;
        private $group;

        public function __construct($data) {
            $this->setId($data['id']);
            $this->setLogin($data['login']);
            $this->setGroup($data['group']);
        }

        public function getId() {
            return $this->id;
        }

        private function setId($id) {
            $this->id = $id;
        }

        public function getGroup() {
            return $this->group;
        }

        private function setGroup($group) {
            $this->group = $group;
        }

        public function getLogin() {
            return $this->login;
        }

        private function setLogin($login) {
            $this->login = $login;
        }

    }

?>