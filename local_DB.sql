-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Окт 11 2018 г., 18:02
-- Версия сервера: 5.7.23-0ubuntu0.18.04.1
-- Версия PHP: 7.2.10-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `local_DB`
--

-- --------------------------------------------------------

--
-- Структура таблицы `imgsForTasks`
--

CREATE TABLE `imgsForTasks` (
  `id` int(11) NOT NULL,
  `link` varchar(255) NOT NULL,
  `idOfTask` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `imgsForTasks`
--

INSERT INTO `imgsForTasks` (`id`, `link`, `idOfTask`) VALUES
(10, 'https://images.pexels.com/photos/46710/pexels-photo-46710.jpeg?auto=compress&cs=tinysrgb&h=350', 23),
(11, 'https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg?auto=compress&cs=tinysrgb&h=350', 23),
(12, 'https://ichef.bbci.co.uk/news/660/cpsprodpb/13284/production/_89586487_istock_000063166549_medium.jpg', 23),
(14, 'https://images.pexels.com/photos/219998/pexels-photo-219998.jpeg?auto=compress&cs=tinysrgb&h=350', 24);

-- --------------------------------------------------------

--
-- Структура таблицы `journal`
--

CREATE TABLE `journal` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `idWhoWas` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Структура таблицы `records`
--

CREATE TABLE `records` (
  `id` int(11) NOT NULL,
  `date` varchar(100) NOT NULL,
  `time` varchar(100) NOT NULL,
  `content` varchar(255) NOT NULL,
  `author` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `records`
--

INSERT INTO `records` (`id`, `date`, `time`, `content`, `author`) VALUES
(1, '20.08.2018', '14:40', 'Завтра всем обязательно быть!', 1),
(2, '18.09.2018', '12:35', 'Отправьте мне свою почту!', 0);

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `shortDesc` varchar(100) NOT NULL,
  `dateToPass` date NOT NULL,
  `allInfo` text NOT NULL,
  `targets` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `shortDesc`, `dateToPass`, `allInfo`, `targets`) VALUES
(2, 'Домашнее задание по электротехнике', '2018-10-12', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc', '1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'),
(3, 'РГЗ по математике', '2018-10-12', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc', '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'),
(6, 'Лаба по ТАУ', '2018-10-15', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc', '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'),
(8, 'РГЗ по математике', '2018-10-17', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc', '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'),
(23, 'Защита по ТАУ', '2018-10-08', 'Готовиться к защите по ТАУ и принести отчет по всем лабам, которые успели сделать', '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16'),
(24, 'someTask', '2018-10-19', 'Some describtion about this task', '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16');

-- --------------------------------------------------------

--
-- Структура таблицы `timetable`
--

CREATE TABLE `timetable` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `number` int(1) NOT NULL,
  `dayOfWeek` varchar(10) NOT NULL,
  `week` int(1) NOT NULL,
  `part` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `timetable`
--

INSERT INTO `timetable` (`id`, `name`, `number`, `dayOfWeek`, `week`, `part`) VALUES
(1, '-', 1, 'Mon', 1, 1),
(2, 'Математика (л) №624', 2, 'Mon', 1, 1),
(3, 'Программирование и алг. (л.р.) №424', 3, 'Mon', 1, 1),
(4, 'Материаловединие (л.р.) №613', 4, 'Mon', 1, 1),
(5, '-', 1, 'Tue', 1, 1),
(6, 'Физкультура', 2, 'Tue', 1, 1),
(7, 'Мат. методы (п.з.) №417', 3, 'Tue', 1, 1),
(8, 'ТАУ (л.р.) №646', 4, 'Tue', 1, 1),
(9, 'Химия (л) №820', 5, 'Tue', 1, 1),
(10, 'Материаловединие (л) №624', 1, 'Wed', 1, 1),
(11, 'Программирование и алг. (л) №526', 2, 'Wed', 1, 1),
(12, 'Иностранный язык', 3, 'Wed', 1, 1),
(13, 'Электротехника (л.р.) №431', 4, 'Wed', 1, 1),
(14, 'Физкультура', 1, 'Fri', 1, 1),
(15, 'Физика (п.з.) №715', 2, 'Fri', 1, 1),
(16, 'Физика (л) №326', 3, 'Fri', 1, 1),
(17, 'Математика (п.з.) №511', 4, 'Fri', 1, 1),
(18, 'Математика (л) №536', 1, 'Mon', 2, 1),
(19, 'Химия (л) №820', 2, 'Mon', 2, 1),
(20, 'Электротехника (п.з.) №417', 3, 'Mon', 2, 1),
(21, 'Мат. методы (л) №828', 1, 'Tue', 2, 1),
(22, 'Физкультура', 2, 'Tue', 2, 1),
(23, 'ТАУ (п.з.) №722', 3, 'Tue', 2, 1),
(24, 'Мат. методы (л.р.) №643', 4, 'Tue', 2, 1),
(25, 'ТАУ (л) №624', 1, 'Wed', 2, 1),
(26, 'Электротехника (л) №624', 2, 'Wed', 2, 1),
(27, 'Иностранный язык', 3, 'Wed', 2, 1),
(28, 'Физика (л.р.) №231,233', 4, 'Wed', 2, 1),
(29, 'Физкультура', 1, 'Fri', 2, 1),
(30, 'Прикладная механика (л) №824', 2, 'Fri', 2, 1),
(31, 'Прикладная механика (л.р.) №551', 3, 'Fri', 2, 1),
(32, 'Математика (п.з.) №511', 4, 'Fri', 2, 1),
(33, 'Химия (л.р.) №845', 5, 'Fri', 2, 1),
(34, 'Математика (л) №624', 1, 'Mon', 1, 2),
(35, 'Прикладная механика (л.р.) №551', 2, 'Mon', 1, 2),
(36, '-', 1, 'Tue', 1, 2),
(37, 'Физкультура', 2, 'Tue', 1, 2),
(38, 'Мат. методы (п.з.) №417', 3, 'Tue', 1, 2),
(39, 'Мат. методы (л.р.) №643', 4, 'Tue', 1, 2),
(40, 'Химия (л) №820', 5, 'Tue', 1, 2),
(41, 'Материаловединие (л) №624', 1, 'Wed', 1, 2),
(42, 'Программирование и алг. (л) №526', 2, 'Wed', 1, 2),
(43, 'Иностранный язык', 3, 'Wed', 1, 2),
(44, 'Физкультура', 1, 'Fri', 1, 2),
(45, 'Физика (п.з.) №715', 2, 'Fri', 1, 2),
(46, 'Физика (л) №326', 3, 'Fri', 1, 2),
(47, 'Математика (п.з.) №511', 4, 'Fri', 1, 2),
(48, 'Химия (л.р.) №845', 5, 'Fri', 1, 2),
(49, 'Математика (л) №536', 1, 'Mon', 2, 2),
(50, 'Химия (л) №820', 2, 'Mon', 2, 2),
(51, 'Электротехника (п.з.) №417', 3, 'Mon', 2, 2),
(52, 'Материаловединие (л.р.) №613', 4, 'Mon', 2, 2),
(53, 'Физика (л.р.) №231,428', 5, 'Mon', 2, 2),
(54, 'Мат. методы (л) №828', 1, 'Tue', 2, 2),
(55, 'Физкультура', 2, 'Tue', 2, 2),
(56, 'ТАУ (п.з.) №722', 3, 'Tue', 2, 2),
(57, 'ТАУ (л.р.) №646', 4, 'Tue', 2, 2),
(58, 'ТАУ (л) №624', 1, 'Wed', 2, 2),
(59, 'Электротехника (л) №624', 2, 'Wed', 2, 2),
(60, 'Иностранный язык', 3, 'Wed', 2, 2),
(61, 'Электротехника (л.р.) №431', 4, 'Wed', 2, 2),
(62, 'Физкультура', 1, 'Fri', 2, 2),
(63, 'Прикладная механика (л) №824', 2, 'Fri', 2, 2),
(64, 'Программирование и алг. (л.р.) №646', 3, 'Fri', 2, 2),
(65, 'Математика (п.з.) №511', 4, 'Fri', 2, 2);

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `login` varchar(100) NOT NULL,
  `passwd` varchar(100) NOT NULL,
  `groupOfUser` int(1) NOT NULL,
  `img` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `passwd`, `groupOfUser`, `img`) VALUES
(1, 'klykov', 'f622579374b71606e1b854c257c19c69', 1, 'https://sun9-8.userapi.com/c830708/v830708082/1359da/E2zNK9_QP0w.jpg'),
(2, 'baranovsky', 'cc7182f5b0883a04c24a150e4ffa52d0', 1, 'https://pp.userapi.com/c629524/v629524576/4c6ef/hcW5VilZ2BE.jpg'),
(3, 'vylomov', '2157977829ffec080706f421e26b2cc6', 1, 'https://pp.userapi.com/c846120/v846120944/7ac92/In010skQjmw.jpg'),
(4, 'dementyev', '3a76169664901b2741c9c4004b9c75f5', 1, 'https://pp.userapi.com/c824201/v824201815/975e4/0nEFk-HMzms.jpg'),
(5, 'zhizhenkova', '436055756e12f9ab2bff239e112e5b07', 1, 'https://pp.userapi.com/c10873/u145405943/149663457/z_5a93e464.jpg'),
(6, 'zenkina', 'faa6716e8238ba374adb570c3ddb046d', 1, 'https://pp.userapi.com/c846123/v846123200/18b7f/c-4yhr8zc7M.jpg'),
(7, 'kunts', 'ac83bbf2a90612bf87da0e444e81cec5', 2, 'https://pp.userapi.com/c846524/v846524283/7a255/gOq1j7Ts6AA.jpg'),
(8, 'lisunova', '8178953fdac10a01bd3d9ce91846bfc3', 1, 'https://sun9-4.userapi.com/c830708/v830708338/1074ed/Q3ZIj4jEx3k.jpg'),
(9, 'mezentsev', '26563aa38084d10d7786f56aaff1a2f8', 2, 'https://pp.userapi.com/c845019/v845019585/9ee46/pSUvfLZ-9yE.jpg'),
(10, 'miteneva', '02702cfb9c9295113eaaed1e35c818ab', 2, 'https://sun9-7.userapi.com/c840638/v840638687/90c29/bEE6c0sHWzo.jpg'),
(11, 'morgunov', '7eb8f63f49758129def4e5c36b3d443f', 2, 'https://pp.userapi.com/c836131/v836131526/3d677/8-jv4Q1T-U4.jpg'),
(12, 'royter', 'ca7ca4cb4aa6a68fad3f6878819f28d3', 2, 'https://pp.userapi.com/c845521/v845521878/5baf/hIsS6Zu4pl8.jpg'),
(13, 'sidirova', 'c358f9c8634851addbf7a63434e62fe2', 2, 'https://pp.userapi.com/c847017/v847017502/7b1b0/fFUJU5CFp2Q.jpg'),
(14, 'terekhova', '6253cc5dab938f5a5fdcd2075e9c0626', 2, 'https://pp.userapi.com/c824200/v824200825/15b646/gxD0zD6GiL4.jpg'),
(15, 'bely', 'dca535066e668371364dff1c51504c15', 1, 'https://pp.userapi.com/c824409/v824409316/683/kmfv9OpS7uM.jpg'),
(16, 'filev', '8c0eace96d27aad993ac37d75710c5ce', 2, 'https://image.freepik.com/free-photo/cute-cat-picture_1122-449.jpg');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `imgsForTasks`
--
ALTER TABLE `imgsForTasks`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `journal`
--
ALTER TABLE `journal`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `records`
--
ALTER TABLE `records`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `timetable`
--
ALTER TABLE `timetable`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `imgsForTasks`
--
ALTER TABLE `imgsForTasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- AUTO_INCREMENT для таблицы `journal`
--
ALTER TABLE `journal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT для таблицы `records`
--
ALTER TABLE `records`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
--
-- AUTO_INCREMENT для таблицы `timetable`
--
ALTER TABLE `timetable`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
