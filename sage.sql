-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 22/08/2024 às 16:21
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `sage`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `category`
--

CREATE TABLE `category` (
  `ID` int(11) NOT NULL,
  `ID_USER` int(11) NOT NULL,
  `ID_ICON` int(11) DEFAULT NULL,
  `NAME` varchar(50) NOT NULL,
  `color` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `category`
--

INSERT INTO `category` (`ID`, `ID_USER`, `ID_ICON`, `NAME`, `color`) VALUES
(1, 1, 1, 'Alimentação', 'White'),
(2, 2, 1, 'Alimentação', 'White'),
(3, 1, 1, 'Educacao', 'Blue');

-- --------------------------------------------------------

--
-- Estrutura para tabela `creditcard`
--

CREATE TABLE `creditcard` (
  `ID` int(11) NOT NULL,
  `LIMITS` float DEFAULT NULL,
  `CONSUMED_VALUE` float DEFAULT NULL,
  `EXPIRATION` date NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `NAME_COLOR` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `creditcard`
--

INSERT INTO `creditcard` (`ID`, `LIMITS`, `CONSUMED_VALUE`, `EXPIRATION`, `NAME`, `NAME_COLOR`) VALUES
(1, 5000, 2500, '2025-12-31', 'Cartão de Crédito Gold', 'Blue'),
(2, 3000, 1000, '2024-09-30', 'Mastercard', 'Gold'),
(4, 5500, 1200, '2030-01-01', 'Elo', 'Black');

-- --------------------------------------------------------

--
-- Estrutura para tabela `goal`
--

CREATE TABLE `goal` (
  `ID` int(11) NOT NULL,
  `ACTUAL_VALUE` float DEFAULT NULL,
  `GOAL_VALUE` float DEFAULT NULL,
  `ID_USER` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `goal`
--

INSERT INTO `goal` (`ID`, `ACTUAL_VALUE`, `GOAL_VALUE`, `ID_USER`) VALUES
(1, 2000, 10000, 1),
(3, 500, 1000, 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `icon`
--

CREATE TABLE `icon` (
  `ID` int(11) NOT NULL,
  `NAME_FONT` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `icon`
--

INSERT INTO `icon` (`ID`, `NAME_FONT`) VALUES
(1, 'icon1'),
(2, 'icon2');

-- --------------------------------------------------------

--
-- Estrutura para tabela `transactions`
--

CREATE TABLE `transactions` (
  `ID` int(11) NOT NULL,
  `VALUE` float DEFAULT NULL,
  `TRANSACTION_DATE` date NOT NULL,
  `ID_CATEGORY` int(11) NOT NULL,
  `ID_WALLET` int(11) NOT NULL,
  `ID_CARD` int(11) DEFAULT NULL,
  `ACTUAL_INSTALLMENT` int(11) DEFAULT NULL,
  `TOTAL_INSTALLMENT` int(11) DEFAULT NULL,
  `IS_EXPENSE` tinyint(1) NOT NULL,
  `LOCATION` varchar(255) DEFAULT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `transactions`
--

INSERT INTO `transactions` (`ID`, `VALUE`, `TRANSACTION_DATE`, `ID_CATEGORY`, `ID_WALLET`, `ID_CARD`, `ACTUAL_INSTALLMENT`, `TOTAL_INSTALLMENT`, `IS_EXPENSE`, `LOCATION`, `DESCRIPTION`) VALUES
(2, 150, '2024-03-01', 1, 1, NULL, NULL, NULL, 1, 'Livraria', 'Compra de livros'),
(3, 25, '2024-03-02', 2, 2, NULL, NULL, NULL, 1, 'Local Cinema', 'Movie night with friends'),
(4, 30, '2024-03-02', 2, 2, NULL, NULL, NULL, 1, 'teste', 'teste'),
(5, 35.5, '2024-03-02', 2, 2, NULL, NULL, NULL, 1, 'teste 1', 'teste 1'),
(6, 35.5, '2024-03-02', 2, 2, NULL, NULL, NULL, 1, 'teste 1', 'teste 1'),
(7, 35.5, '2024-03-15', 2, 2, NULL, NULL, NULL, 0, 'teste 2', 'teste 2');

-- --------------------------------------------------------

--
-- Estrutura para tabela `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `NAME` varchar(50) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `PASSWORD` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `user`
--

INSERT INTO `user` (`ID`, `NAME`, `EMAIL`, `PASSWORD`) VALUES
(1, 'John Doe', 'john@example.com', 'password123'),
(2, 'Jane Smith', 'jane@example.com', 'pass456'),
(3, 'João da Silva', 'joao.silva@example.com', 'minhaSenhaSegura');

-- --------------------------------------------------------

--
-- Estrutura para tabela `wallet`
--

CREATE TABLE `wallet` (
  `ID` int(11) NOT NULL,
  `VALUE` float DEFAULT NULL,
  `ID_USER` int(11) NOT NULL,
  `NAME` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `wallet`
--

INSERT INTO `wallet` (`ID`, `VALUE`, `ID_USER`, `NAME`) VALUES
(1, 2000, 1, 'Carteira Principal'),
(2, 200, 2, 'Savings');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_USER` (`ID_USER`),
  ADD KEY `ID_ICON` (`ID_ICON`);

--
-- Índices de tabela `creditcard`
--
ALTER TABLE `creditcard`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `goal`
--
ALTER TABLE `goal`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_USER` (`ID_USER`);

--
-- Índices de tabela `icon`
--
ALTER TABLE `icon`
  ADD PRIMARY KEY (`ID`);

--
-- Índices de tabela `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_CATEGORY` (`ID_CATEGORY`),
  ADD KEY `ID_WALLET` (`ID_WALLET`),
  ADD KEY `ID_CARD` (`ID_CARD`);

--
-- Índices de tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `EMAIL` (`EMAIL`);

--
-- Índices de tabela `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `ID_USER` (`ID_USER`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `category`
--
ALTER TABLE `category`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `creditcard`
--
ALTER TABLE `creditcard`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `goal`
--
ALTER TABLE `goal`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `icon`
--
ALTER TABLE `icon`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `transactions`
--
ALTER TABLE `transactions`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `wallet`
--
ALTER TABLE `wallet`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `category`
--
ALTER TABLE `category`
  ADD CONSTRAINT `category_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID`),
  ADD CONSTRAINT `category_ibfk_2` FOREIGN KEY (`ID_ICON`) REFERENCES `icon` (`ID`);

--
-- Restrições para tabelas `goal`
--
ALTER TABLE `goal`
  ADD CONSTRAINT `goal_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID`);

--
-- Restrições para tabelas `transactions`
--
ALTER TABLE `transactions`
  ADD CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`ID_CATEGORY`) REFERENCES `category` (`ID`),
  ADD CONSTRAINT `transactions_ibfk_2` FOREIGN KEY (`ID_WALLET`) REFERENCES `wallet` (`ID`),
  ADD CONSTRAINT `transactions_ibfk_3` FOREIGN KEY (`ID_CARD`) REFERENCES `creditcard` (`ID`);

--
-- Restrições para tabelas `wallet`
--
ALTER TABLE `wallet`
  ADD CONSTRAINT `wallet_ibfk_1` FOREIGN KEY (`ID_USER`) REFERENCES `user` (`ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
