import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { OverlayTrigger, Tooltip, Button, Form, Modal, Table, ButtonGroup, Col, InputGroup, Card, Row, Alert } from "react-bootstrap";
import { FormGroup } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { imagesData } from "./commonimages";
import { } from "react-bootstrap";
import { nanoid } from "nanoid";
import DataTable from "react-data-table-component";
import DataTableExtensions from 'react-data-table-component-extensions'
import axios from 'axios';
import Select from 'react-select';

import { TreeView } from '@mui/x-tree-view/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeItem } from '@mui/x-tree-view';

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
//dashboard1

import { link } from '../service';

import { Vertical } from '../components/advancedui/workflow/autoridadedecarga';

const url = link;

const permissoesData = localStorage.getItem("permissoes");
const permissoes = JSON.parse(permissoesData);

const token = localStorage.getItem("token");


export const COLUMNS1 = [
  {
    Header: "Purchase Date",
    accessor: "PurchaseDate",
    className: "text-center ",
  },
  {
    Header: "Client Name",
    accessor: "ClientName",
    className: "text-center ",
  },
  {
    Header: "Product ID",
    accessor: "ProductID",
    className: "text-center ",
  },
  {
    Header: "Product",
    accessor: "Product",
    className: "text-center ",
  },
  {
    Header: "Product Cost",
    accessor: "ProductCost",
    className: "text-center ",
  },
  {
    Header: "Payment Mode",
    accessor: "PaymentMode",
    className: "text-center ",
  },
  {
    Header: "Status",
    accessor: "Status",
    className: "text-center ",
  },
];

export const DATATABLE1 = [
  {
    PurchaseDate: "#01",
    ClientName: "Tiger Nixon",
    ProductID: "PRO12345",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$320,800",
    color: "badge badge-success",
  },
  {
    PurchaseDate: "#02",
    ClientName: "Garrett Winters",
    ProductID: "PRO8765",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-primary">Add Cart</span>,
    ProductCost: "$170,750",
  },
  {
    PurchaseDate: "#03",
    ClientName: "Ashton Cox",
    ProductID: "PRO54321",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$86,000",
  },
  {
    PurchaseDate: "#04",
    ClientName: "Cedric Kelly",
    ProductID: "PRO97654",
    Product: "Micromax 81cm (32 inch) HD Ready LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-secondary">Delivering</span>,
    ProductCost: "$433,060",
  },
  {
    PurchaseDate: "#05",
    ClientName: "Airi Satou",
    ProductID: "PRO4532",
    Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$162,700",
  },
  {
    PurchaseDate: "#06",
    ClientName: "Brielle Williamson",
    ProductID: "PRO6789",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-secondary">Delivering</span>,
    ProductCost: "$372,000",
  },
  {
    PurchaseDate: "#07",
    ClientName: "Herrod Chandler",
    ProductID: "PRO4567",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$137,500",
  },
  {
    PurchaseDate: "#08",
    ClientName: "Rhona Davidson",
    ProductID: "PRO32156",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-pink">Delivered</span>,
    ProductCost: "$327,900",
  },
  {
    PurchaseDate: "#09",
    ClientName: "Colleen Hurst",
    ProductID: "PRO35785",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$205,500",
  },
  {
    PurchaseDate: "#10",
    ClientName: "Sonya Frost",
    ProductID: "PRO23409",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-secondary">Delivering</span>,
    ProductCost: "$103,600",
  },
  {
    PurchaseDate: "#11",
    ClientName: "Jena Gaines",
    ProductID: "PRO12345",
    Product: "Digisol DG-HR3400 Router",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$90,560",
  },
  {
    PurchaseDate: "#12",
    ClientName: "Quinn Flynn",
    ProductID: "PRO64326",
    Product: "Dell 16 inch Laptop Backpack",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$342,000",
  },
  {
    PurchaseDate: "#13",
    ClientName: "Charde Marshall",
    ProductID: "PRO87563",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$470,600",
  },
  {
    PurchaseDate: "#14",
    ClientName: "Haley Kennedy",
    ProductID: "PRO65439",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$313,500",
  },
  {
    PurchaseDate: "#15",
    ClientName: "Tatyana Fitzpatrick",
    ProductID: "PRO097254",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered ",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$385,750",
  },
  {
    PurchaseDate: "#16",
    ClientName: "Michael Silva",
    ProductID: "PRO45312",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$198,500",
  },
  {
    PurchaseDate: "#17",
    ClientName: "Paul Byrd",
    ProductID: "PRO45674",
    Product: "Digisol DG-HR3400 Router",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$725,000",
  },
  {
    PurchaseDate: "#18",
    ClientName: "Gloria Little",
    ProductID: "PRO34653",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$237,500",
  },
  {
    PurchaseDate: "#19",
    ClientName: "Bradley Greer",
    ProductID: "PRO24467",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$132,000",
  },
  {
    PurchaseDate: "#20",
    ClientName: "Dai Rios",
    ProductID: "PRO35323",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$217,500",
  },
  {
    PurchaseDate: "#21",
    ClientName: "Jenette Caldwell",
    ProductID: "PRO56793",
    Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$345,000",
  },
  {
    PurchaseDate: "#22",
    ClientName: "Yuri Berry",
    ProductID: "PRO32156",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$675,000",
  },
  {
    PurchaseDate: "#23",
    ClientName: "Caesar Vance",
    ProductID: "PRO4567",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$106,450",
  },
  {
    PurchaseDate: "#24",
    ClientName: "Doris Wilder",
    ProductID: "PRO6789",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$85,600",
  },
  {
    PurchaseDate: "#25",
    ClientName: "Angelica Ramos",
    ProductID: "PRO4532",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$1,200,000",
  },
  {
    PurchaseDate: "#26",
    ClientName: "Gavin Joyce",
    ProductID: "PRO97654",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$92,575",
  },
  {
    PurchaseDate: "#27",
    ClientName: "Jennifer Chang",
    ProductID: "PRO45412",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$357,650",
  },
  {
    PurchaseDate: "#28",
    ClientName: "Brenden Wagner",
    ProductID: "PRO12345",
    Product: "Dell 16 inch Laptop Backpack",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$206,850",
  },
  {
    PurchaseDate: "#29",
    ClientName: "Fiona Green",
    ProductID: "PRO8765",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$850,000",
  },
  {
    PurchaseDate: "#30",
    ClientName: "Shou Itou",
    ProductID: "PRO54321",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$163,000",
  },
];

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control mb-4"
        placeholder="Search..."
      />
    </span>
  );
};

//end 


//dashboard2
export const COLUMNS2 = [
  {
    Header: "Purchase Date",
    accessor: "PurchaseDate",
    className: "text-center ",
  },
  {
    Header: "Client Name",
    accessor: "ClientName",
    className: "text-center ",
  },
  {
    Header: "Product ID",
    accessor: "ProductID",
    className: "text-center ",
  },
  {
    Header: "Product",
    accessor: "Product",
    className: "text-center ",
  },
  {
    Header: "Product Cost",
    accessor: "ProductCost",
    className: "text-center ",
  },
  {
    Header: "Payment Mode",
    accessor: "PaymentMode",
    className: "text-center ",
  },
  {
    Header: "Status",
    accessor: "Status",
  },
  {
    Header: "ACTION",
    accessor: "Action",
    className: "text-center ",
  },
];

export const DATATABLE2 = [
  {
    PurchaseDate: "#01",
    ClientName: "Tiger Nixon",
    ProductID: "PRO12345",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success-transparent">Delivered</span>,
    ProductCost: "$320,800",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
  {
    PurchaseDate: "#02",
    ClientName: "Garrett Winters",
    ProductID: "PRO8765",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-primary-transparent">Add Cart</span>,
    ProductCost: "$170,750",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
  {
    PurchaseDate: "#03",
    ClientName: "Ashton Cox",
    ProductID: "PRO54321",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger-transparent">Pending</span>,
    ProductCost: "$86,000",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
  {
    PurchaseDate: "#04",
    ClientName: "Cedric Kelly",
    ProductID: "PRO97654",
    Product: "Micromax 81cm (32 inch) HD Ready LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-warning-transparent">Delivering</span>,
    ProductCost: "$433,060",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
  {
    PurchaseDate: "#05",
    ClientName: "Airi Satou",
    ProductID: "PRO4532",
    Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger-transparent">Shipped</span>,
    ProductCost: "$162,700",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
  {
    PurchaseDate: "#06",
    ClientName: "Brielle Williamson",
    ProductID: "PRO6789",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-primary-transparent">Delivering</span>,
    ProductCost: "$372,000",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
  {
    PurchaseDate: "#07",
    ClientName: "Herrod Chandler",
    ProductID: "PRO4567",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info-transparent">Add to Cart</span>,
    ProductCost: "$137,500",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
  {
    PurchaseDate: "#08",
    ClientName: "Rhona Davidson",
    ProductID: "PRO32156",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-pink-transparent">Delivered</span>,
    ProductCost: "$327,900",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
  {
    PurchaseDate: "#09",
    ClientName: "Colleen Hurst",
    ProductID: "PRO35785",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger-transparent">Pending</span>,
    ProductCost: "$205,500",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
  {
    PurchaseDate: "#10",
    ClientName: "Sonya Frost",
    ProductID: "PRO23409",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-pink-transparent">Delivered</span>,
    ProductCost: "$103,600",
    Action: (
      <span className="">
        <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
          <Link to="#" className="btn btn-primary btn-sm rounded-11 me-2">
            <i>
              <svg
                className="table-edit"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
          <Link to="#" className="btn btn-danger btn-sm rounded-11">
            <i>
              <svg
                className="table-delete"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
              </svg>
            </i>
          </Link>
        </OverlayTrigger>
      </span>
    ),
  },
];
//end

//dashboard3

export const COLUMNS3 = [
  {
    Header: "Purchase Date",
    accessor: "PurchaseDate",
    className: "text-center ",
  },
  {
    Header: "Client Name",
    accessor: "ClientName",
    className: "text-center ",
  },
  {
    Header: "Product ID",
    accessor: "ProductID",
    className: "text-center ",
  },
  {
    Header: "Product",
    accessor: "Product",
    className: "text-center ",
  },
  {
    Header: "Product Cost",
    accessor: "ProductCost",
    className: "text-center ",
  },
  {
    Header: "Payment Mode",
    accessor: "PaymentMode",
    className: "text-center ",
  },
  {
    Header: "Status",
    accessor: "Status",
    className: "text-center ",
  },
];

export const DATATABLE3 = [
  {
    PurchaseDate: "#01",
    ClientName: "Tiger Nixon",
    ProductID: "PRO12345",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$320,800",
    color: "badge badge-success",
  },
  {
    PurchaseDate: "#02",
    ClientName: "Garrett Winters",
    ProductID: "PRO8765",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-primary">Add Cart</span>,
    ProductCost: "$170,750",
  },
  {
    PurchaseDate: "#03",
    ClientName: "Ashton Cox",
    ProductID: "PRO54321",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$86,000",
  },
  {
    PurchaseDate: "#04",
    ClientName: "Cedric Kelly",
    ProductID: "PRO97654",
    Product: "Micromax 81cm (32 inch) HD Ready LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-secondary">Delivering</span>,
    ProductCost: "$433,060",
  },
  {
    PurchaseDate: "#05",
    ClientName: "Airi Satou",
    ProductID: "PRO4532",
    Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$162,700",
  },
  {
    PurchaseDate: "#06",
    ClientName: "Brielle Williamson",
    ProductID: "PRO6789",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-secondary">Delivering</span>,
    ProductCost: "$372,000",
  },
  {
    PurchaseDate: "#07",
    ClientName: "Herrod Chandler",
    ProductID: "PRO4567",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$137,500",
  },
  {
    PurchaseDate: "#08",
    ClientName: "Rhona Davidson",
    ProductID: "PRO32156",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-pink">Delivered</span>,
    ProductCost: "$327,900",
  },
  {
    PurchaseDate: "#09",
    ClientName: "Colleen Hurst",
    ProductID: "PRO35785",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$205,500",
  },
  {
    PurchaseDate: "#10",
    ClientName: "Sonya Frost",
    ProductID: "PRO23409",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-secondary">Delivering</span>,
    ProductCost: "$103,600",
  },
  {
    PurchaseDate: "#11",
    ClientName: "Jena Gaines",
    ProductID: "PRO12345",
    Product: "Digisol DG-HR3400 Router",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$90,560",
  },
  {
    PurchaseDate: "#12",
    ClientName: "Quinn Flynn",
    ProductID: "PRO64326",
    Product: "Dell 16 inch Laptop Backpack",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$342,000",
  },
  {
    PurchaseDate: "#13",
    ClientName: "Charde Marshall",
    ProductID: "PRO87563",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$470,600",
  },
  {
    PurchaseDate: "#14",
    ClientName: "Haley Kennedy",
    ProductID: "PRO65439",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$313,500",
  },
  {
    PurchaseDate: "#15",
    ClientName: "Tatyana Fitzpatrick",
    ProductID: "PRO097254",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV",
    PaymentMode: "Cash on delivered ",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$385,750",
  },
  {
    PurchaseDate: "#16",
    ClientName: "Michael Silva",
    ProductID: "PRO45312",
    Product: "Mi LED Smart TV 4A 80",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$198,500",
  },
  {
    PurchaseDate: "#17",
    ClientName: "Paul Byrd",
    ProductID: "PRO45674",
    Product: "Digisol DG-HR3400 Router",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$725,000",
  },
  {
    PurchaseDate: "#18",
    ClientName: "Gloria Little",
    ProductID: "PRO34653",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$237,500",
  },
  {
    PurchaseDate: "#19",
    ClientName: "Bradley Greer",
    ProductID: "PRO24467",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$132,000",
  },
  {
    PurchaseDate: "#20",
    ClientName: "Dai Rios",
    ProductID: "PRO35323",
    Product: "Vu 80cm (32 inch) HD Ready LED TV",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$217,500",
  },
  {
    PurchaseDate: "#21",
    ClientName: "Jenette Caldwell",
    ProductID: "PRO56793",
    Product: "HP 200 Mouse &amp; Wireless Laptop Keyboard",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$345,000",
  },
  {
    PurchaseDate: "#22",
    ClientName: "Yuri Berry",
    ProductID: "PRO32156",
    Product: "Dell 16 inch Laptop Backpack ",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$675,000",
  },
  {
    PurchaseDate: "#23",
    ClientName: "Caesar Vance",
    ProductID: "PRO4567",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$106,450",
  },
  {
    PurchaseDate: "#24",
    ClientName: "Doris Wilder",
    ProductID: "PRO6789",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$85,600",
  },
  {
    PurchaseDate: "#25",
    ClientName: "Angelica Ramos",
    ProductID: "PRO4532",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$1,200,000",
  },
  {
    PurchaseDate: "#26",
    ClientName: "Gavin Joyce",
    ProductID: "PRO97654",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$92,575",
  },
  {
    PurchaseDate: "#27",
    ClientName: "Jennifer Chang",
    ProductID: "PRO45412",
    Product: "Thomson R9 122cm (48 inch) Full HD LED TV ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-danger">Shipped</span>,
    ProductCost: "$357,650",
  },
  {
    PurchaseDate: "#28",
    ClientName: "Brenden Wagner",
    ProductID: "PRO12345",
    Product: "Dell 16 inch Laptop Backpack",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-info">Add to Cart</span>,
    ProductCost: "$206,850",
  },
  {
    PurchaseDate: "#29",
    ClientName: "Fiona Green",
    ProductID: "PRO8765",
    Product: "Digisol DG-HR3400 Router ",
    PaymentMode: "Cash on delivered",
    Status: <span className="badge badge-orange">Pending</span>,
    ProductCost: "$850,000",
  },
  {
    PurchaseDate: "#30",
    ClientName: "Shou Itou",
    ProductID: "PRO54321",
    Product: "Dell WM118 Wireless Optical Mouse",
    PaymentMode: "Online Payment",
    Status: <span className="badge badge-success">Delivered</span>,
    ProductCost: "$163,000",
  },
];

//end


//data tables
//1)
export const COLUMNS = [
  {
    Header: "Name",
    accessor: "Name",
    className: "wd-20p borderrigth",
  },
  {
    Header: "Position",
    accessor: "Position",
    className: "wd-25p borderrigth",
  },
  {
    Header: "Office",
    accessor: "Office",
    className: "wd-20p borderrigth",
  },
  {
    Header: "Age",
    accessor: "Age",
    className: "wd-15p borderrigth",
  },
  {
    Header: "Salary",
    accessor: "Salary",
    className: "wd-20p borderrigth",
  },
];
export const DATATABLE = [
  {
    Id: "1",
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: "61",
    Salary: "$320,800",
  },
  {
    Id: "2",
    Name: "Garrett Winters",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "63",
    Salary: "$170,750",
  },
  {
    Id: "3",
    Name: "Ashton Cox",
    Position: "Junior Technical Author",
    Office: "San Francisco",
    Age: "66",
    Salary: "$86,000",
  },
  {
    Id: "4",
    Name: "Cedric Kelly",
    Position: "Senior Javascript Developer",
    Office: "Edinburgh",
    Age: "22",
    Salary: "$433,060",
  },
  {
    Id: "5",
    Name: "Airi Satou",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "33",
    Salary: "$162,700",
  },
  {
    Id: "6",
    Name: "Brielle Williamson",
    Position: "Integration Specialist",
    Office: "New York",
    Age: "61",
    Salary: "$372,000",
  },
  {
    Id: "7",
    Name: "Herrod Chandler",
    Position: "Sales Assistant",
    Office: "San Francisco",
    Age: "59",
    Salary: "$137,500",
  },
  {
    Id: "8",
    Name: "Rhona Davidson",
    Position: "Integration Specialist",
    Office: "Tokyo",
    Age: "55",
    Salary: "$327,900",
  },
  {
    Id: "9",
    Name: "Colleen Hurst",
    Position: "Javascript Developer",
    Office: "San Francisco",
    Age: "39",
    Salary: "$205,500",
  },
  {
    Id: "10",
    Name: "Sonya Frost",
    Position: "Software Engineer",
    Office: "Edinburgh",
    Age: "23",
    Salary: "$103,600",
  },
  {
    Id: "11",
    Name: "Jena Gaines",
    Position: "Office Manager",
    Office: "London",
    Age: "30",
    Salary: "$90,560",
  },
  {
    Id: "12",
    Name: "Quinn Flynn",
    Position: "Support Lead",
    Office: "Edinburgh",
    Age: "22",
    Salary: "$342,000",
  },
  {
    Id: "13",
    Name: "Charde Marshall",
    Position: "Regional Director",
    Office: "San Francisco",
    Age: "36",
    Salary: "$470,600",
  },
  {
    Id: "14",
    Name: "Haley Kennedy",
    Position: "Senior Marketing Designer",
    Office: "London",
    Age: "43",
    Salary: "$313,500",
  },
  {
    Id: "15",
    Name: "Tatyana Fitzpatrick",
    Position: "Regional Director",
    Office: "London",
    Age: "19",
    Salary: "$385,750",
  },
  {
    Id: "16",
    Name: "Michael Silva",
    Position: "Marketing Designer",
    Office: "London",
    Age: "66",
    Salary: "$198,500",
  },
  {
    Id: "17",
    Name: "Paul Byrd",
    Position: "Chief Financial Officer (CFO)",
    Office: "New York",
    Age: "64",
    Salary: "$725,000",
  },
  {
    Id: "18",
    Name: "Gloria Little",
    Position: "Systems Administrator",
    Office: "New York",
    Age: "59",
    Salary: "$237,500",
  },
  {
    Id: "19",
    Name: "Bradley Greer",
    Position: "Software Engineer",
    Office: "London",
    Age: "41",
    Salary: "$132,000",
  },
  {
    Id: "20",
    Name: "Dai Rios",
    Position: "Personnel Lead",
    Office: "Edinburgh",
    Age: "35",
    Salary: "$217,500",
  },
  {
    Id: "21",
    Name: "Jenette Caldwell",
    Position: "Development Lead",
    Office: "New York",
    Age: "30",
    Salary: "$345,000",
  },
  {
    Id: "22",
    Name: "Yuri Berry",
    Position: "Chief Marketing Officer (CMO)",
    Office: "New York",
    Age: "40",
    Salary: "$675,000",
  },
  {
    Id: "23",
    Name: "Caesar Vance",
    Position: "Pre-Sales Support",
    Office: "New York",
    Age: "21",
    Salary: "$106,450",
  },
  {
    Id: "24",
    Name: "Doris Wilder",
    Position: "Sales Assistant",
    Office: "Sidney",
    Age: "23",
    Salary: "$85,600",
  },
  {
    Id: "25",
    Name: "Angelica Ramos",
    Position: "Chief Executive Officer (CEO)",
    Office: "London",
    Age: "47",
    Salary: "$1,200,000",
  },
  {
    Id: "26",
    Name: "Gavin Joyce",
    Position: "Developer",
    Office: "Edinburgh",
    Age: "42",
    Salary: "$92,575",
  },
  {
    Id: "27",
    Name: "Jennifer Chang",
    Position: "Regional Director",
    Office: "Singapore",
    Age: "28",
    Salary: "$357,650",
  },
  {
    Id: "28",
    Name: "Brenden Wagner",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "28",
    Salary: "$206,850",
  },
  {
    Id: "29",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    Salary: "$850,000",
  },
  {
    Id: "30",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    Salary: "$163,000",
  },
  {
    Id: "31",
    Name: "Michelle House",
    Position: "Integration Specialist",
    Office: "Sidney",
    Age: "37",
    Salary: "$95,400",
  },
  {
    Id: "32",
    Name: "Suki Burks",
    Position: "Developer",
    Office: "London",
    Age: "53",
    Salary: "$114,500",
  },
  {
    Id: "33",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    Salary: "$145,000",
  },
  {
    Id: "34",
    Name: "Gavin Cortez",
    Position: "Team Leader",
    Office: "San Francisco",
    Age: "22",
    Salary: "$235,500",
  },
  {
    Id: "35",
    Name: "Martena Mccray",
    Position: "Post-Sales support",
    Office: "Edinburgh",
    Age: "46",
    Salary: "$324,050",
  },
  {
    Id: "36",
    Name: "Unity Butler",
    Position: "Marketing Designer",
    Office: "San Francisco",
    Age: "47",
    Salary: "$85,675",
  },
  {
    Id: "37",
    Name: "Howard Hatfield",
    Position: "Office Manager",
    Office: "San Francisco",
    Age: "51",
    Salary: "$164,500",
  },
  {
    Id: "38",
    Name: "Hope Fuentes",
    Position: "Secretary",
    Office: "San Francisco",
    Age: "41",
    Salary: "$109,850",
  },
  {
    Id: "39",
    Name: "Vivian Harrell",
    Position: "Financial Controller",
    Office: "San Francisco",
    Age: "62",
    Salary: "$452,500",
  },
  {
    Id: "40",
    Name: "Timothy Mooney",
    Position: "Office Manager",
    Office: "London",
    Age: "37",
    Salary: "$136,200",
  },
  {
    Id: "41",
    Name: "Jackson Bradshaw",
    Position: "Director",
    Office: "New York",
    Age: "65",
    Salary: "$645,750",
  },
  {
    Id: "42",
    Name: "Olivia Liang",
    Position: "Support Engineer",
    Office: "Singapore",
    Age: "64",
    Salary: "$234,500",
  },
  {
    Id: "43",
    Name: "Bruno Nash",
    Position: "Software Engineer",
    Office: "London",
    Age: "38",
    Salary: "$163,500",
  },
  {
    Id: "44",
    Name: "Sakura Yamamoto",
    Position: "Support Engineer",
    Office: "Tokyo",
    Age: "37",
    Salary: "$139,575",
  },
  {
    Id: "45",
    Name: "Thor Walton",
    Position: "Developer",
    Office: "New York",
    Age: "61",
    Salary: "$98,540",
  },
  {
    Id: "46",
    Name: "Finn Camacho",
    Position: "Support Engineer",
    Office: "San Francisco",
    Age: "47",
    Salary: "$87,500",
  },
  {
    Id: "47",
    Name: "Serge Baldwin",
    Position: "Data Coordinator",
    Office: "Singapore",
    Age: "64",
    Salary: "$138,575",
  },
  {
    Id: "48",
    Name: "Zenaida Frank",
    Position: "Software Engineer",
    Office: "New York",
    Age: "63",
    Salary: "$125,250",
  },
  {
    Id: "49",
    Name: "Zorita Serrano",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "56",
    Salary: "$115,000",
  },
  {
    Id: "50",
    Name: "Jennifer Acosta",
    Position: "Junior Javascript Developer",
    Office: "Edinburgh",
    Age: "43",
    Salary: "$75,650",
  },
  {
    Id: "51",
    Name: "Cara Stevens",
    Position: "Sales Assistant",
    Office: "New York",
    Age: "46",
    Salary: "$145,600",
  },
  {
    Id: "52",
    Name: "Hermione Butler",
    Position: "Regional Director",
    Office: "London",
    Age: "47",
    Salary: "$356,250",
  },
  {
    Id: "53",
    Name: "Lael Greer",
    Position: "Systems Administrator",
    Office: "London",
    Age: "21",
    Salary: "$103,500",
  },
  {
    Id: "54",
    Name: "Jonas Alexander",
    Position: "Developer",
    Office: "San Francisco",
    Age: "30",
    Salary: "$86,500",
  },
  {
    Id: "55",
    Name: "Shad Decker",
    Position: "Regional Director",
    Office: "Edinburgh",
    Age: "51",
    Salary: "$183,000",
  },
  {
    Id: "56",
    Name: "Michael Bruce",
    Position: "Javascript Developer",
    Office: "Singapore",
    Age: "29",
    Salary: "$183,000",
  },
  {
    Id: "57",
    Name: "Donna Snider",
    Position: "Customer Support",
    Office: "New York",
    Age: "27",
    Salary: "$112,000",
  },
  {
    Id: "58",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    Salary: "$850,000",
  },
  {
    Id: "59",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    Salary: "$163,000",
  },
  {
    Id: "60",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    Salary: "$145,000",
  },
];
export const BasicTable = () => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="d-flex">
        <select
          className=" mb-4 selectpage border me-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table {...getTableProps()} className="table table-hover mb-0">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={column.className}
                >
                  <span className="tabletitle">{column.render("Header")}</span>
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-angle-down"></i>
                      ) : (
                        <i className="fa fa-angle-up"></i>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className="borderrigth" {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="d-block d-sm-flex mt-4 ">
        <span className="">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </span>
        <span className="ms-sm-auto ">
          <Button
            variant=""
            className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {" Previous "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" << "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" < "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" > "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 my-1"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" >> "}
          </Button>
          <Button
            variant=""
            className="btn-default tablebutton me-2 d-sm-inline d-block my-1"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {" Next "}
          </Button>
        </span>
      </div>
    </>
  );
};

//4)

export const Savetable = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const data = [
    {
      id: "1",
      sno: "1",
      Name: "Yonna",
      lastname: "Qond",
      position: "Financial Controller",
      email: "jacke123@gmail.com",
      salary: "$143,654",
    },
    {
      id: "2",
      sno: "2",
      Name: "Zonna",
      lastname: "Jond",
      position: "Accountant",
      email: "virginia456@gmail.com",
      salary: "$343,654",
    },
    {
      id: "3",
      sno: "3",
      Name: "Nonna",
      lastname: "Tond",
      position: "Chief Executive Officer",
      email: "jacobthomson@gmail.com",
      salary: "$743,654",
    },
    {
      id: "4",
      sno: "4",
      Name: "Bonna",
      lastname: "Oond",
      position: "Chief Operating Officer",
      email: "trevor@gmail.com",
      salary: "$643,654",
    },
    {
      id: "5",
      sno: "5",
      Name: "Honna",
      lastname: "Pond",
      position: "Data Coordinator",
      email: "kylie@gmail.com",
      salary: "$243,654",
    },
    {
      id: "6",
      sno: "6",
      Name: "Fonna",
      lastname: "Nond",
      position: "Developer",
      email: "jan@gmail.com",
      salary: "$543,654",
    },
    {
      id: "7",
      sno: "7",
      Name: "Aonna",
      lastname: "Xond",
      position: "Development lead",
      email: "trevor@gmail.com",
      salary: "$843,654",
    },
    {
      id: "8",
      sno: "8",
      Name: "Qonna",
      lastname: "Vond",
      position: "Director",
      email: "kylie@gmail.com",
      salary: "$843,654",
    },
    {
      id: "9",
      sno: "9",
      Name: "Jond",
      lastname: "Zonna",
      position: "Marketing Officer",
      email: "emily@gmail.com",
      salary: "$843,654",
    },
    {
      id: "10",
      sno: "10",
      Name: "Yonna",
      lastname: "Qond",
      position: "Financial Controller",
      email: "jan@gmail.com",
      salary: "$433,060",
    },
  ];
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    sno: "",
    Name: "",
    lastname: "",
    position: "",
    email: "",
    salary: "",
  });

  const [editFormData, setEditFormData] = useState({
    sno: "",
    Name: "",
    lastname: "",
    position: "",
    email: "",
    salary: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      sno: addFormData.sno,
      Name: addFormData.Name,
      lastname: addFormData.lastname,
      position: addFormData.position,
      email: addFormData.email,
      salary: addFormData.salary,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      sno: editFormData.sno,
      Name: editFormData.Name,
      lastname: editFormData.lastname,
      position: editFormData.position,
      email: editFormData.email,
      salary: editFormData.salary,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      sno: contact.sno,
      Name: contact.Name,
      lastname: contact.lastname,
      position: contact.position,
      email: contact.email,
      salary: contact.salary,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <Form onSubmit={handleEditFormSubmit}>
        <Button
          variant=""
          className="btn btn-primary mb-3"
          onClick={() => setModalShow(true)}
        >
          Add New Row
        </Button>
        <Table
          id="delete-datatable"
          className="table table-bordered text-nowrap border-bottom"
        >
          <thead>
            <tr>
              <th className="wd-5p text-center">S NO</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Email</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment key={contact.id}>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </Form>

      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add New Row
          </Modal.Title>
          <Button
            variant=""
            className="btn btn-close"
            onClick={() => setModalShow(false)}
          >
            x
          </Button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddFormSubmit} className="">
            <Form.Control
              type="text"
              name="sno"
              required
              placeholder="S No..."
              onChange={handleAddFormChange}
              className="form-control mb-2 border"
            />
            <Form.Control
              type="text"
              name="Name"
              required
              placeholder="Enter a name..."
              onChange={handleAddFormChange}
              className="form-control mb-2 border"
            />
            <Form.Control
              type="text"
              name="lastname"
              required
              placeholder="Enter an lastname..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Form.Control
              type="text"
              name="position"
              required
              placeholder="Enter a phone number..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Form.Control
              type="email"
              name="email"
              required
              placeholder="Enter an email..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Form.Control
              type="salary"
              name="salary"
              required
              placeholder="Salary..."
              onChange={handleAddFormChange}
              className="form-control mb-2"
            />
            <Button
              variant=""
              className="btn btn-primary me-2 wd-100p "
              type="submit"
            >
              Add
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn btn-primary wd-20p"
            onClick={() => setModalShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="S NO"
          name="Sno"
          value={editFormData.sno}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="Enter a name..."
          name="Name"
          value={editFormData.Name}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="Enter an lastname..."
          name="lastname"
          value={editFormData.lastname}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="text"
          required
          placeholder="Enter a phone number..."
          name="position"
          value={editFormData.position}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="email"
          required
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Form.Control
          type="salary"
          required
          placeholder="Salary..."
          name="salary"
          value={editFormData.salary}
          onChange={handleEditFormChange}
          className="border"
        ></Form.Control>
      </td>
      <td>
        <Button variant="" className="btn btn-primary me-1" type="submit">
          Save
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"
          type="button "
          onClick={handleCancelClick}
        >
          Cancel
        </Button>
      </td>
    </tr>
  );
};
const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td className="wd-5p text-center">{contact.sno}</td>
      <td>{contact.Name}</td>
      <td>{contact.lastname}</td>
      <td>{contact.position}</td>
      <td>{contact.email}</td>
      <td>{contact.salary}</td>
      <td>
        <Button
          variant=""
          className="btn btn-primary me-1"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </Button>
        <Button
          variant=""
          className="btn btn-danger me-1"
          type="button"
          onClick={() => handleDeleteClick(contact.id)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};


//**** datatable ****//
export const COLUMNSS4 = [
  {
    Header: "FIRST NAME",
    accessor: "FNAME",
    className: "text-center wd-15p border-bottom-0",
  },
  {
    Header: "LAST NAME",
    accessor: "LNAME",
    className: "text-center wd-15p border-bottom-0 ",

  },
  {
    Header: "POSITION",
    accessor: "POSITION",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "	START DATE",
    accessor: "START",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "SALARY",
    accessor: "SALARY",
    className: "text-center wd-15p border-bottom-0 ",
  },
  {
    Header: "E-MAIL",
    accessor: "MAIL",
    className: "text-center wd-15p border-bottom-0 ",
  }

];

export const DATATABLE4 = [
  {
    FNAME: 'Bella',
    LNAME: 'Chloe',
    POSITION: 'System Developer',
    START: '2018/03/12',
    SALARY: '$654,765',
    MAIL: 'b.Chloe@datatables.net',
  },
  {
    FNAME: 'Donna',
    LNAME: 'Bond',
    POSITION: 'Account Manager',
    START: '2012/02/21',
    SALARY: '$543,654',
    MAIL: 'd.bond@datatables.net',
  },
  {
    FNAME: 'Harry',
    LNAME: 'Carr',
    POSITION: 'Technical Manager',
    START: '20011/02/87',
    SALARY: '$86,000',
    MAIL: 'h.carr@datatables.net',
  },
  {
    FNAME: 'Lucas',
    LNAME: 'Dyer',
    POSITION: 'Javascript Developer',
    START: '2014/08/23',
    SALARY: '$456,123',
    MAIL: 'l.dyer@datatables.net',
  },
  {
    FNAME: 'Karen',
    LNAME: 'Hill',
    POSITION: 'Sales Manager',
    START: '2010/7/14',
    SALARY: '$432,230',
    MAIL: 'k.hill@datatables.net',
  },
  {
    FNAME: 'Dominic',
    LNAME: 'Hudson',
    POSITION: 'Sales Assistant',
    START: '2015/10/16',
    SALARY: '$654,300',
    MAIL: 'd.hudson@datatables.net',
  },
  {
    FNAME: 'Herrod',
    LNAME: 'Chandler',
    POSITION: 'Integration Specialist',
    START: '2012/08/06',
    SALARY: '$137,500',
    MAIL: 'h.chandler@datatables.net',
  },
  {
    FNAME: 'Jonathan',
    LNAME: 'Ince',
    POSITION: 'junior Manager',
    START: '2012/11/23',
    SALARY: '$345,789',
    MAIL: 'j.ince@datatables.net',
  },
  {
    FNAME: "Leonard",
    LNAME: "Ellison",
    POSITION: "Junior Javascript Developer",
    START: "2010/03/19",
    SALARY: "$205,500",
    MAIL: "l.ellison@datatables.net",
  },
  {
    FNAME: "Madeleine",
    LNAME: "Lee",
    POSITION: "Software Developer",
    START: "20015/8/23",
    SALARY: "$456,890",
    MAIL: "m.lee@datatables.net",
  },
  {
    FNAME: "Karen",
    LNAME: "Miller",
    POSITION: "Office Director",
    START: "2012/9/25",
    SALARY: "$87,654",
    MAIL: "k.miller@datatables.net",
  },
  {
    FNAME: "Lisa",
    LNAME: "Smith",
    POSITION: "Support Lead",
    START: "2011/05/21",
    SALARY: "$342,000",
    MAIL: "l.simth@datatables.net",
  },
  {
    FNAME: "Morgan",
    LNAME: "Keith",
    POSITION: "Accountant",
    START: "2012/11/27",
    SALARY: "$675,245",
    MAIL: "m.keith@datatables.net",
  },
  {
    FNAME: "Nathan",
    LNAME: "Mills",
    POSITION: "Senior Marketing Designer",
    START: "2014/10/8",
    SALARY: "$765,980",
    MAIL: "n.mills@datatables.net",
  },
  {
    FNAME: "Ruth",
    LNAME: "May",
    POSITION: "office Manager",
    START: "2010/03/17",
    SALARY: "$654,765",
    MAIL: "r.may@datatables.net",
  },
  {
    FNAME: "Penelope",
    LNAME: "Ogden",
    POSITION: "Marketing Manager",
    START: "2013/5/22",
    SALARY: "$345,510",
    MAIL: "p.ogden@datatables.net",
  },
  {
    FNAME: "Sean",
    LNAME: "Piper",
    POSITION: "Financial Officer",
    START: "2014/06/11",
    SALARY: "$725,000",
    MAIL: "s.piper@datatables.net",
  },
  {
    FNAME: "Trevor",
    LNAME: "Ross",
    POSITION: "Systems Administrator",
    START: "2011/05/23",
    SALARY: "$237,500",
    MAIL: "t.ross@datatables.net",
  },
  {
    FNAME: "Vanessa",
    LNAME: "Robertson",
    POSITION: "Software Designer",
    START: "2014/6/23",
    SALARY: "$765,654",
    MAIL: "v.robertson@datatables.net",
  },
  {
    FNAME: "Una",
    LNAME: "Richard",
    POSITION: "Personnel Manager",
    START: "2014/5/22",
    SALARY: "$765,290",
    MAIL: "u.richard@datatables.net",
  },
  {
    FNAME: "Justin",
    LNAME: "Peters",
    POSITION: "Development lead",
    START: "2013/10/23",
    SALARY: "$765,654",
    MAIL: "j.peters@datatables.net",
  },
  {
    FNAME: "Adrian",
    LNAME: "Terry",
    POSITION: "Marketing Officer",
    START: "2013/04/21",
    SALARY: "$543,769",
    MAIL: "a.terry@datatables.net",
  },
  {
    FNAME: "Cameron",
    LNAME: "Watson",
    POSITION: "Sales Support",
    START: "2013/9/7",
    SALARY: "$675,876",
    MAIL: "c.watson@datatables.net",
  },
  {
    FNAME: "Evan",
    LNAME: "Terry",
    POSITION: "Sales Manager",
    START: "2013/10/26",
    SALARY: "$66,340",
    MAIL: "d.terry@datatables.net",
  },
  {
    FNAME: "Angelica",
    LNAME: "Ramos",
    POSITION: "Chief Executive Officer",
    START: "20017/10/15",
    SALARY: "$6,234,000",
    MAIL: "a.ramos@datatables.net",
  },
  {
    FNAME: "Connor",
    LNAME: "Johne",
    POSITION: "Web Developer",
    START: "2011/1/25",
    SALARY: "$92,575",
    MAIL: "C.johne@datatables.net",
  },
  {
    FNAME: "Jennifer",
    LNAME: "Chang",
    POSITION: "Regional Director",
    START: "2012/17/11",
    SALARY: "$546,890",
    MAIL: "j.chang@datatables.net",
  },
  {
    FNAME: "Brenden",
    LNAME: "Wagner",
    POSITION: "Software Engineer",
    START: "2013/07/14",
    SALARY: "$206,850",
    MAIL: "b.wagner@datatables.net",
  },
  {
    FNAME: "Fiona",
    LNAME: "Green",
    POSITION: "Chief Operating Officer",
    START: "2015/06/23",
    SALARY: "$345,789",
    MAIL: "f.green@datatables.net",
  },
  {
    FNAME: "Shou",
    LNAME: "Itou",
    POSITION: "Regional Marketing",
    START: "2013/07/19",
    SALARY: "$335,300",
    MAIL: "s.itou@datatables.net",
  },
  {
    FNAME: "Michelle",
    LNAME: "House",
    POSITION: "Integration Specialist",
    START: "2016/07/18",
    SALARY: "$76,890",
    MAIL: "m.house@datatables.net",
  },
];
export const Datatable = () => {

  const tableInstance = useTable(
    {
      columns: COLUMNSS4,
      data: DATATABLE4,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Col lg={12} xl={12} >

        <Card className="deleted-table">
          <Card.Header className="border-bottom-0 d-flex justify-content-between align-items-center">

            <Card.Title>1 - 30 of 546 users</Card.Title>
            <div className="d-flex justify-content-end">
              <select
                className="mb-6 table-border me-1"
                value={pageSize}
                // onClick={()=>{getRandomUppercaseChar()}}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[10, 25, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>

            </div>
          </Card.Header>
          <InputGroup className="mt-2 mb-5">
            <GlobalFilter1 filter={globalFilter} setFilter={setGlobalFilter} />
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <div className="e-table pb-5">
            <div className="table-responsive ">


              <table
                {...getTableProps()}
                className="table table-bordered text-nowrap mb-0"
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                          className={column.className} key={Math.random()}
                        >
                          <span className="tabletitle">{column.render("Header")}</span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr className="text-center" {...row.getRowProps()} key={Math.random()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()} key={Math.random()}>{cell.render("Cell")}</td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="d-flex mt-4 align-items-center">
                <span className="">
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{" "}
                </span>
                <span className="ms-auto ps-2">
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(0)}
                    disabled={!canPreviousPage}
                  >
                    {" Previous "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" << "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      previousPage();
                    }}
                    disabled={!canPreviousPage}
                  >
                    {" < "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" > "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => {
                      nextPage();
                    }}
                    disabled={!canNextPage}
                  >
                    {" >> "}
                  </Button>
                  <Button
                    variant=""
                    className="btn-default tablebutton me-2 my-2"
                    onClick={() => gotoPage(pageCount - 1)}
                    disabled={!canNextPage}
                  >
                    {" Next "}
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </Card>

      </Col>

    </>
  );
};
const GlobalFilter1 = ({ filter, setFilter }) => {
  return (
    <input
      value={filter || ""}
      onChange={(e) => setFilter(e.target.value)}
      className="form-control"
      placeholder="Search..."
    />
  );
};

//userlist
export const COLUMNS5 = [

  {
    Header: "Name",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Marca",
    accessor: "ROLE",
    className: "text-center ",
  },
  {
    Header: "Origem",
    accessor: "LAST",
    className: "text-center ",
  },
  {
    Header: "Destino",
    accessor: "COUNTRY",
    className: "text-center ",
  },
  {
    Header: "Estado",
    accessor: "BADGE",
    className: "text-center ",
  },
  {
    Header: "Data de Submissao",
    accessor: "DATE",
    className: "text-center ",
  },
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const COLUMNSProvincia = [
  {
    Header: "Nome",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Zona",
    accessor: "ZONA",
    className: "text-center ",
  },
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const COLUMNSDistrito = [

  {
    Header: "Nome",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Provincia",
    accessor: "PROVINCIA",
    className: "text-center ",
  },
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const COLUMNSZona = [
  {
    Header: "Nome",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const COLUMNSAeroporto = [

  {
    Header: "Nome",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Contacto",
    accessor: "CONTACTO",
    className: "text-center ",
  },
  {
    Header: "Email",
    accessor: "EMAIL",
    className: "text-center ",
  },
  {
    Header: "Tipo",
    accessor: "TIPO",
    className: "text-center ",
  },
  {
    Header: "Provincia",
    accessor: "PROVINCIA",
    className: "text-center ",
  },
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const COLUMNSTerminal = [

  {
    Header: "Nome",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Aeroporto",
    accessor: "AEROPORTO",
    className: "text-center ",
  },
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const COLUMNSSessaoTerminal = [

  {
    Header: "Nome",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Aeroporto",
    accessor: "AEROPORTO",
    className: "text-center ",
  },
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const COLUMNSTipoCarga = [
  {
    Header: "Nome",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const COLUMNSEntidade = [
  {
    Header: "Nome",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Email",
    accessor: "EMAIL",
    className: "text-center ",
  },
  {
    Header: "Contacto",
    accessor: "CONTACTO",
    className: "text-center ",
  },
  {
    Header: "Entidade Banco",
    accessor: "ENTIDADE BANCO",
    className: "text-center ",
  },
  {
    Header: "Entidade Referencia",
    accessor: "ENTIDADE REFERENCIA",
    className: "text-center ",
  },
  /* {
    Header: "Nuit",
    accessor: "NUIT",
    className: "text-center ",
  },
  {
    Header: "Tipo Entidade",
    accessor: "TIPO ENTIDADE",
    className: "text-center ",
  }, */
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];

export const COLUMNSAutoridadeCarga = [
  {
    Header: "Nome",
    accessor: "NAME",
    className: "text-center ",
  },
  {
    Header: "Descricao",
    accessor: "DESCRICAO",
    className: "text-center ",
  },
  {
    Header: "Origem",
    accessor: "ORIGEM",
    className: "text-center ",
  },
  {
    Header: "Destino",
    accessor: "DESTINO",
    className: "text-center ",
  },
  {
    Header: "Action",
    accessor: "ACTION",
    className: "text-center ",
  },

];


let path = `${import.meta.env.BASE_URL}advancedui/aprovacoes`;

// Formacao da tabela;
export const DATATABLE5 = [
  {

    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' style={{ gap: '5px' }}>
        <OverlayTrigger placement="top" overlay={<Tooltip >Aprovacoes</Tooltip>}>
          <Link to={path}>
            <Button>
              <i className="fa fa-pen"></i>
            </Button>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Ver Detalhes</Tooltip>}>
          <Button>

            <i className="fa fa-eye"></i>

          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,

    NAME: "Computadores",
    ROLE: "Dell Inspirion",
    LAST: "Aeroporto de Pemba",
    COUNTRY: "Aeroporto de Maputo",
    BADGE: <span className="badge font-weight-semibold bg-success-transparent text-warning tx-11">Sob Aprovação</span>,
    DATE: "	09 Dec 2017",

  },
  {

    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' style={{ gap: '5px' }}>
        <OverlayTrigger placement="top" overlay={<Tooltip >Aprovacoes</Tooltip>}>
          <Link>
            <Button>
              <i className="fa fa-check"></i>
            </Button>
          </Link>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Ver Detalhes</Tooltip>}>
          <Button>

            <i className="fa fa-eye"></i>

          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,

    NAME: "Malas de dinheiro",
    ROLE: "Gucci",
    LAST: "Aeroporto de Maputo",
    COUNTRY: "Aeroporto Internacional de Dubai",
    BADGE: <span className="badge font-weight-semibold bg-success-transparent text-success tx-11">Aprovado</span>,
    DATE: "	09 Dec 2017",

  },

];

export const DATATABLEZona = [


  {
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
          <Button className="me-1"><i className="fa fa-edit"></i></Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    NAME: "Adam Cotter",
  },
];

export const DATATABLEProvincia = [
  {
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
          <Button className="me-1"><i className="fa fa-edit"></i></Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    NAME: "Maputo",
    ZONA: "Sul",

  },

];

export const DATATABLEDistrito = [
  {
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
          <Button className="me-1"><i className="fa fa-edit"></i></Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    NAME: "KaMubukwana",
    PROVINCIA: "Maputo",

  },
  {
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
          <Button className="me-1"><i className="fa fa-edit"></i></Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    NAME: "KaMavota",
    PROVINCIA: "Maputo",
  },

];

export const DATATABLEAeroporto = [
  {
    SNO: 1,
    ACTION: <span className="text-center align-middle">
      <ButtonGroup size="sm" className='flex-nowrap' >
        <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
          <Button className="me-1"><i className="fa fa-edit"></i></Button>
        </OverlayTrigger>
        <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
          <Button>
            <i className="fa fa-trash"></i>
          </Button>
        </OverlayTrigger>
      </ButtonGroup>
    </span>,
    NAME: "KaMubukwana",
    CONTACTO: "894849849",
    EMAIL: "Maputo@dataproxy.com",
    TIPO: "Maputo",
    PROVINCIA: "Maputo",

  },
];




export const GlobalFilter2 = ({ filter, setFilter }) => {
  return (
    <span className="d-flex ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control"
        placeholder="Pesquisar..."
      />
    </span>
  );
};

export const UserList = () => {

  const tableInstance = useTable(
    {
      columns: COLUMNS5,
      data: DATATABLE5,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <GlobalFilter2 filter={globalFilter} setFilter={setGlobalFilter} />
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">1 Carga</Card.Title>
              <div className="d-flex">


              </div>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive ">
                  <table
                    {...getTableProps()}
                    className="table table-bordered text-nowrap mb-0"
                  >
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                          {headerGroup.headers.map((column) => (
                            <th
                              {...column.getHeaderProps(column.getSortByToggleProps())}
                              className={column.className} key={Math.random()}
                            >
                              <span className="tabletitle">{column.render("Header")}</span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                      {page.map((row) => {
                        prepareRow(row);
                        return (
                          <tr className="text-center" {...row.getRowProps()} key={Math.random()}>
                            {row.cells.map((cell) => {
                              return (
                                <td {...cell.getCellProps()} key={Math.random()}>{cell.render("Cell")}</td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>

                </div>
              </div>
            </Card.Body>

          </Card>

        </Col>

      </Row>
    </>
  );
};


{/* export const ZonaList2 = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');

  const handleShow = () => setShow(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.z_nome);
    setEditedId(row.z_id);
    handleShow();
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(`${url}/api/ActualizarZona`, {
        'z_nome': editedNome,
        'id': editId,
        'idUser': '13'
      });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };


  const DATATABLEZonas = [];

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/BuscarTodasZonas`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]);

  const DATATABLEZona1 = data.map((row, index) => (
    {
      ACTION: <span className="text-center align-middle" >
        <ButtonGroup size="sm" className='flex-nowrap' >
          <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
            <Button className="me-1"><i className="fa fa-edit"></i></Button>
          </OverlayTrigger>
          <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
            <Button>
              <i className="fa fa-trash"></i>
            </Button>
          </OverlayTrigger>
        </ButtonGroup>
      </span>,
      NAME: row.z_nome,
    }
  ));

  const tableInstance = useTable(
    {
      columns: COLUMNSZona,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <GlobalFilter2 filter={globalFilter} setFilter={setGlobalFilter} />
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">1 - {pageSize} of {data.length} zonas</Card.Title>
              <div className="d-flex">
                <select
                  className="mb-6 table-border me-1"
                  value={pageSize}
                  onChange={(e) => setPageSize(Number(e.target.value))}
                >
                  {[10, 25, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Mostrar {pageSize}
                    </option>
                  ))}
                </select>

              </div>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive ">
                  <table
                    {...getTableProps()}
                    className="table table-bordered text-nowrap mb-0"
                  >
                    <thead>
                      {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                          <th style={{ textAlign: 'center' }}>SNO</th>
                          {headerGroup.headers.map((column) => (
                            <th
                              {...column.getHeaderProps(column.getSortByToggleProps())}
                              className={column.className} key={Math.random()}
                            >
                              <span className="tabletitle">{column.render("Header")}</span>
                            </th>
                          ))}
                        </tr>
                      ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>

                      {data.map((row, index) => {
                        return (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>{row.z_nome}</td>
                            <td>
                              <span className="text-center align-middle" >
                                <ButtonGroup size="sm" className='flex-nowrap' >
                                  <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                    <Button className="me-1" key={row.z_id} onClick={() => handleEdit(row)}><i className="fa fa-edit"></i></Button>
                                  </OverlayTrigger>
                                  <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                    <Button key={row.z_id}>
                                      <i className="fa fa-trash"></i>
                                    </Button>
                                  </OverlayTrigger>
                                </ButtonGroup>
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                  <div className="d-flex mt-4 align-items-center">
                    <span className="">
                      Pagina{" "}
                      <strong>
                        {pageIndex + 1} of {pageOptions.length}
                      </strong>{" "}
                    </span>
                    <span className="ms-auto ps-2">
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-2"
                        onClick={() => gotoPage(0)}
                        disabled={!canPreviousPage}
                      >
                        {" Anterior "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-2"
                        onClick={() => {
                          previousPage();
                        }}
                        disabled={!canPreviousPage}
                      >
                        {" << "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-2"
                        onClick={() => {
                          previousPage();
                        }}
                        disabled={!canPreviousPage}
                      >
                        {" < "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-2"
                        onClick={() => {
                          nextPage();
                        }}
                        disabled={!canNextPage}
                      >
                        {" > "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-2"
                        onClick={() => {
                          nextPage();
                        }}
                        disabled={!canNextPage}
                      >
                        {" >> "}
                      </Button>
                      <Button
                        variant=""
                        className="btn-default tablebutton me-2 my-2"
                        onClick={() => gotoPage(pageCount - 1)}
                        disabled={!canNextPage}
                      >
                        {" Proxima "}
                      </Button>
                    </span>
                  </div>
                </div>
              </div>
            </Card.Body>

          </Card>

        </Col>

      </Row>

      // Edit Modal 
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Zona</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}; */}

function TabelaComPaginacaoZonas(dados) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');

  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.z_nome);
    setEditedId(row.z_id);
    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.z_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/ActualizarZona`, {
        'z_nome': editedNome,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarZona`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;

    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.z_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} zonas</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => (
                        <tr className="text-center" key={index}>
                          <td>{index + 1}</td>
                          <td>{item.z_nome}</td>
                          <td>
                            <span className="text-center align-middle" >
                              <ButtonGroup size="sm" className='flex-nowrap' >
                                {
                                  permissoes.editar_zona == 1 ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                      <Button className="me-1" key={item.z_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                    </OverlayTrigger>
                                  ) : <></>
                                }
                                {
                                  permissoes.deletar_zona == 1 ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                      <Button key={item.z_id} onClick={() => handleDeleteMethod(item)}>
                                        <i className="fa fa-trash"></i>
                                      </Button>
                                    </OverlayTrigger>
                                  ) : <></>
                                }

                              </ButtonGroup>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Zona</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoProvincias(dados, zonas) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');
  const [editZonaId, setEditZonaId] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);


  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.p_nome);
    setEditedId(row.p_id);
    setSelectedOption(row.zona.z_id);

    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.p_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/ActualiarProvincia`, {
        'p_nome': editedNome,
        'id_zona': selectedOption.value,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarProvincia`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;

    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.p_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelected(selectedOption.value);

  };

  const options = zonas.map((item) => ({
    value: item.z_id,
    label: item.z_nome
  }));


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Provincias</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Zona</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => {
                        const valor = item.zona.z_nome;

                        return (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>{item.p_nome}</td>
                            <td>{valor}</td>

                            <td>
                              <span className="text-center align-middle" >
                                <ButtonGroup size="sm" className='flex-nowrap' >
                                  {
                                    permissoes.editar_provincia == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                        <Button className="me-1" key={item.p_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }
                                  {
                                    permissoes.deletar_provincia == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                        <Button key={item.p_id} onClick={() => handleDeleteMethod(item)}>
                                          <i className="fa fa-trash"></i>
                                        </Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }

                                </ButtonGroup>
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Provincia</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
              />
            </Form.Group>
            <FormGroup className="form-group">
              <Select
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Selecione uma opção"
                isSearchable
                classNamePrefix='Select2' className="multi-select"
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoDistritos(dados, provincia) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);


  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.d_nome);
    setEditedId(row.d_id);

    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.d_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/ActualiarDistrito`, {
        'd_nome': editedNome,
        'id_provincia': selectedOption.value,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarDistrito`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;

    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.d_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelected(selectedOption.value);

  };

  const options = provincia.map((item) => ({
    value: item.p_id,
    label: item.p_nome
  }));


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Distritos</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Provincia</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => {
                        const valor = item.provincia.p_nome;

                        return (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>{item.d_nome}</td>
                            <td>{valor}</td>

                            <td>
                              <span className="text-center align-middle" >
                                <ButtonGroup size="sm" className='flex-nowrap' >
                                  {
                                    permissoes.editar_distrito == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                        <Button className="me-1" key={item.d_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }
                                  {
                                    permissoes.deletar_distrito == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                        <Button key={item.d_id} onClick={() => handleDeleteMethod(item)}>
                                          <i className="fa fa-trash"></i>
                                        </Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }

                                </ButtonGroup>
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Distrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
              />
            </Form.Group>
            <FormGroup className="form-group">
              <Select
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Selecione uma opção"
                isSearchable
                classNamePrefix='Select2' className="multi-select"
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoAeroportos(dados, provincia) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');
  const [editEmail, setEditedEmail] = useState('');
  const [editContacto, setEditedContacto] = useState('');
  const [editTipo, setEditedTipo] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);


  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.a_nome);
    setEditedId(row.a_id);
    setEditedEmail(row.a_email);
    setEditedContacto(row.a_contacto);
    setEditedTipo(row.a_Tipo_aeroporto);
    setSelectedOption(row.provincia.p_id);
    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.a_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/AtualizarAeroporto`, {
        'a_nome': editedNome,
        'a_email': editEmail,
        'a_contacto': editContacto,
        'a_Tipo_aeroporto': editTipo,
        'id_provincia': selectedOption.value,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarAeroporto`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;
    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.a_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelected(selectedOption.value);

  };

  const options = provincia.map((item) => ({
    value: item.p_id,
    label: item.p_nome
  }));


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Aeroportos</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Email</th>
                        <th className="tabletitle">Contacto</th>
                        <th className="tabletitle">Tipo</th>
                        <th className="tabletitle">Provincia</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => {
                        const valor = item.provincia.p_nome;

                        return (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>{item.a_nome}</td>
                            <td>{item.a_email}</td>
                            <td>{item.a_contacto}</td>
                            <td>{item.a_Tipo_aeroporto}</td>
                            <td>{valor}</td>

                            <td>
                              <span className="text-center align-middle" >
                                <ButtonGroup size="sm" className='flex-nowrap' >
                                  {
                                    permissoes.editar_aeroporto == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                        <Button className="me-1" key={item.a_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }
                                  {
                                    permissoes.deletar_aeroporto == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                        <Button key={item.a_id} onClick={() => handleDeleteMethod(item)}>
                                          <i className="fa fa-trash"></i>
                                        </Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }

                                </ButtonGroup>
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Aeroporto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formContacto">
              <Form.Label>Contacto</Form.Label>
              <Form.Control
                type="number"
                value={editContacto}
                onChange={(e) => setEditedContacto(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formTipo">
              <Form.Label>Tipo de Aeroporto</Form.Label>
              <Form.Control
                type="text"
                value={editTipo}
                onChange={(e) => setEditedTipo(e.target.value)}
              />
            </Form.Group>
            <FormGroup className="form-group">
              <Form.Label>Provincia</Form.Label>
              <Select
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Selecione uma opção"
                isSearchable
                classNamePrefix='Select2' className="multi-select"
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoEntidades(dados) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');
  const [editEmail, setEditedEmail] = useState('');
  const [editContacto, setEditedContacto] = useState('');
  const [editEntidade, setEditedEntidade] = useState('');
  const [editReferencia, setEditedReferencia] = useState('');
  const [editNuit, setEditedNuit] = useState('');
  const [editalvara, setEditedalvara] = useState('');
  const [editInicioA, setEditedInicioA] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);


  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.e_nome);
    setEditedId(row.e_id);
    setEditedEmail(row.e_email);
    setEditedContacto(row.e_contacto);
    setEditedEntidade(row.e_entidade_banco);
    setEditedReferencia(row.e_referencia_banco);
    setEditedNuit(row.e_Nuit);
    setEditedInicioA(row.e_Data_início_actividade);
    setEditedalvara(row.e_alvara);
    setSelectedOption(row.e_tipo_entidade);

    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.a_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    console.log(selectedOption.label);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/updateEntidade`, {
        'e_nome': editedNome,
        'e_email': editEmail,
        'e_contacto': editContacto,
        'e_Nuit': editNuit,
        'e_entidade_banco': editEntidade,
        'e_referencia_banco': editReferencia,
        'e_Data_início_actividade': editInicioA,
        'id': editId,
        'e_alvara': editalvara,
        'e_tipo_entidade': selectedOption.label,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarAeroporto`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;
    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.e_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelected(selectedOption.value);

  };

  const optionsComNovosValores = [

    { id: 0, label: 'Empresa de transporte' },
    { id: 1, label: 'Inspeccao' },
    { id: 2, label: 'Outros' },
  ];

  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Entidades</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Email</th>
                        <th className="tabletitle">Contacto</th>
                        <th className="tabletitle">Entidade</th>
                        <th className="tabletitle">Referência</th>
                        <th className="tabletitle">Nuit</th>
                        <th className="tabletitle">Alvara</th>
                        <th className="tabletitle">Inicio de Actividade</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => {

                        return (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>{item.e_nome}</td>
                            <td>{item.e_email}</td>
                            <td>{item.e_contacto}</td>
                            <td>{item.e_entidade_banco}</td>
                            <td>{item.e_referencia_banco}</td>
                            <td>{item.e_Nuit}</td>
                            <td>{item.e_alvara}</td>
                            <td>{item.e_Data_início_actividade}</td>
                            <td>
                              <span className="text-center align-middle" >
                                <ButtonGroup size="sm" className='flex-nowrap' >
                                  <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                    <Button className="me-1" key={item.e_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                  </OverlayTrigger>
                                  <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                    <Button key={item.e_id} onClick={() => handleDeleteMethod(item)}>
                                      <i className="fa fa-trash"></i>
                                    </Button>
                                  </OverlayTrigger>
                                </ButtonGroup>
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Entidade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={editEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </Form.Group>
            <div className="gap-5" style={{ display: "flex", flexDirection: 'row' }}>
              <Form.Group controlId="formContacto">
                <Form.Label>Contacto</Form.Label>
                <Form.Control
                  type="number"
                  value={editContacto}
                  onChange={(e) => setEditedContacto(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formTipo">
                <Form.Label>Inicio Actividade</Form.Label>
                <Form.Control
                  type="date"
                  value={editInicioA}
                  onChange={(e) => setEditedalvara(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="gap-5" style={{ display: "flex", flexDirection: 'row' }}>
              <Form.Group controlId="formTipo">
                <Form.Label>Entidade</Form.Label>
                <Form.Control
                  type="text"
                  value={editEntidade}
                  onChange={(e) => setEditedEntidade(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formTipo">
                <Form.Label>Referencia</Form.Label>
                <Form.Control
                  type="text"
                  value={editReferencia}
                  onChange={(e) => setEditedReferencia(e.target.value)}
                />
              </Form.Group>
            </div>
            <div className="gap-5" style={{ display: "flex", flexDirection: 'row' }}>
              <Form.Group controlId="formTipo">
                <Form.Label>NUIT</Form.Label>
                <Form.Control
                  type="text"
                  value={editNuit}
                  onChange={(e) => setEditedNuit(e.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="formTipo">
                <Form.Label>Alvara</Form.Label>
                <Form.Control
                  type="text"
                  value={editalvara}
                  onChange={(e) => setEditedalvara(e.target.value)}
                />
              </Form.Group>
            </div>
            <FormGroup className="form-group">
              <Form.Label>Tipo de Entidade</Form.Label>
              <Select
                options={optionsComNovosValores}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Selecione uma opção"
                isSearchable
                classNamePrefix='Select2' className="multi-select"
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal >

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoTerminais(dados, aeroportos) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');
  const [editZonaId, setEditZonaId] = useState('');

  const [selectedOption, setSelectedOption] = useState(null);


  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.t_nome);
    setEditedId(row.t_id);
    setSelectedOption(row.aeroporto.a_id);

    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.t_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/AtualizarTerminal`, {
        't_nome': editedNome,
        'id_aeroporto': selectedOption.value,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarTerminal`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;

    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.t_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setSelected(selectedOption.value);

  };

  const options = aeroportos.map((item) => ({
    value: item.a_id,
    label: item.a_nome
  }));


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Terminais</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Aeroporto</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => {
                        const valor = item.aeroporto.a_nome;

                        return (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>{item.t_nome}</td>
                            <td>{valor}</td>

                            <td>
                              <span className="text-center align-middle" >
                                <ButtonGroup size="sm" className='flex-nowrap' >
                                  {
                                    permissoes.editar_terminal == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                        <Button className="me-1" key={item.t_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }
                                  {
                                    permissoes.deletar_terminal == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                        <Button key={item.t_id} onClick={() => handleDeleteMethod(item)}>
                                          <i className="fa fa-trash"></i>
                                        </Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }

                                </ButtonGroup>
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Terminal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
              />
            </Form.Group>
            <FormGroup className="form-group">
              <Form.Label>Aeroporto</Form.Label>
              <Select
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Selecione uma opção"
                isSearchable
                classNamePrefix='Select2' className="multi-select"
              />
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoSessaoTerminal(dados) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');

  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.st_nome);
    setEditedId(row.st_id);
    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.st_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/updateSessaoTermal`, {
        'st_nome': editedNome,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/deleteSessaoTermal`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;

    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.st_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Secção de Terminais</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => (
                        <tr className="text-center" key={index}>
                          <td>{index + 1}</td>
                          <td>{item.st_nome}</td>
                          <td>
                            <span className="text-center align-middle" >
                              <ButtonGroup size="sm" className='flex-nowrap' >
                                {
                                  permissoes.editar_sessao_do_terminal == 1 ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                      <Button className="me-1" key={item.st_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                    </OverlayTrigger>
                                  ) : <></>
                                }
                                {
                                  permissoes.deletar_sessao_do_terminal == 1 ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                      <Button key={item.st_id} onClick={() => handleDeleteMethod(item)}>
                                        <i className="fa fa-trash"></i>
                                      </Button>
                                    </OverlayTrigger>
                                  ) : <></>
                                }

                              </ButtonGroup>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Zona</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoTipoCarga(dados) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');

  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.tc_nome);
    setEditedId(row.tc_id);
    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.tc_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/AtualizarTipoCarga`, {
        'tc_nome': editedNome,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarTipoCarga`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;

    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.tc_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Tipos de Carga</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => (
                        <tr className="text-center" key={index}>
                          <td>{index + 1}</td>
                          <td>{item.tc_nome}</td>
                          <td>
                            <span className="text-center align-middle" >
                              <ButtonGroup size="sm" className='flex-nowrap' >
                                {
                                  permissoes.editar_tipo_carga == 1 ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                      <Button className="me-1" key={item.tc_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                    </OverlayTrigger>
                                  ) : <></>
                                }
                                {
                                  permissoes.deletar_tipo_carga == 1 ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                      <Button key={item.tc_id} onClick={() => handleDeleteMethod(item)}>
                                        <i className="fa fa-trash"></i>
                                      </Button>
                                    </OverlayTrigger>
                                  ) : <></>
                                }

                              </ButtonGroup>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Zona</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoTaxa(dados, entidades, tipoCarga, aeroporto) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [showd, setShowd] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');
  const [peso_minimo, setEditedpeso_minimo] = useState('');
  const [valor_minimo, setEditedvalor_minimo] = useState('');
  const [editValorCm3, setEditedValorCm3] = useState('');
  const [peso_inicial, setEditedpeso_inicial] = useState('');
  const [peso_final, setEditedpeso_final] = useState('');

  const [valor_calculo, setEditedvalor_calculo] = useState('');
  const [editAeroportoDe, setEditedAeroportoDe] = useState('');
  const [editAeroportoPara, setEditedAeroportoPara] = useState('');

  const [entidadeData, setEntidadeData] = useState('');
  const [tipoCargaData, setTipoCarga] = useState('');


  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);


  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleShowd = () => setShowd(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.ta_nome);
    setEditedId(row.ta_id);
    setEditedpeso_minimo(row.ta_peso_minimo);
    setEditedvalor_minimo(row.ta_valor_minimo);
    setEditedpeso_inicial(row.ta_de_peso);
    setEditedpeso_final(row.ta_para_peso);
    setEditedvalor_calculo(row.ta_valor_calculo_de_para_peso);
    setEntidadeData(row.e_nome);
    setTipoCarga(row.tc_nome);
    setEditedAeroportoDe(row.nome_aeroporto_origem);
    setEditedAeroportoPara(row.nome_aeroporto_destino);


    handleShow();
  };

  const handleView = (row) => {
    setEditData(row);
    setEditedNome(row.ta_nome);
    setEditedId(row.ta_id);
    setEditedpeso_minimo(row.ta_peso_minimo);
    setEditedvalor_minimo(row.ta_valor_minimo);
    setEditedpeso_inicial(row.ta_de_peso);
    setEditedpeso_final(row.ta_para_peso);
    setEditedvalor_calculo(row.ta_valor_calculo_de_para_peso);
    setEntidadeData(row.e_nome);
    setTipoCarga(row.tc_nome);
    setEditedAeroportoDe(row.nome_aeroporto_origem);
    setEditedAeroportoPara(row.nome_aeroporto_destino);

    handleShowd();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.ta_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleClosed = () => {
    setShowd(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/updatetaxa`, {
        'ta_nome': editedNome,
        'ta_peso_minimo': peso_minimo,
        'ta_valor_minimo': valor_minimo,
        'ta_de_peso': peso_inicial,
        'ta_para_peso': peso_final,
        'ta_valor_calculo_de_para_peso': valor_calculo,
        'ta_tipo_carga_id': selectedOption2.value,
        'ta_id_aeroporto_origem': selectedOption3.value,
        'ta_id_aeroporto_destino': selectedOption4.value,
        'id_entidade': selectedOption.value,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/deletetaxa`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;
    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.ta_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleChange2 = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

  const options = entidades.map((item) => ({
    value: item.e_id,
    label: item.e_nome
  }));

  const options2 = tipoCarga.map((item) => ({
    value: item.tc_id,
    label: item.tc_nome
  }));

  const handleChange3 = (selectedOption) => {
    setSelectedOption3(selectedOption);
  };

  const handleChange4 = (selectedOption) => {
    setSelectedOption4(selectedOption);
  };

  const options3 = aeroporto.map((item) => ({
    value: item.a_id,
    label: item.a_nome
  }));

  const options4 = aeroporto.map((item) => ({
    value: item.a_id,
    label: item.a_nome
  }));


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Taxas</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Aeroporto de origem</th>
                        <th className="tabletitle">Aeroporto de destino</th>
                        <th className="tabletitle">Entidade</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => {
                        //const valor = item.provincia.p_nome;

                        return (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>{item.ta_nome}</td>
                            <td>{item.nome_aeroporto_origem}</td>
                            <td>{item.nome_aeroporto_destino}</td>
                            <td>{item.e_nome}</td>
                            <td>
                              <span className="text-center align-middle" >
                                <ButtonGroup size="sm" className='flex-nowrap' >
                                  <OverlayTrigger placement="top" overlay={<Tooltip >Ver Mais</Tooltip>}>
                                    <Button className="me-1" key={item.a_id} onClick={() => handleView(item)}><i className="fa fa-eye"></i></Button>
                                  </OverlayTrigger>
                                  {
                                    permissoes.editar_taxa == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                        <Button className="me-1" key={item.a_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }
                                  {
                                    permissoes.deletar_taxa == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                        <Button key={item.a_id} onClick={() => handleDeleteMethod(item)}>
                                          <i className="fa fa-trash"></i>
                                        </Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }

                                </ButtonGroup>
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Taxa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="p-4">
            <Form className="form-horizontal">
              <FormGroup className="form-group">
                <Form.Label>Nome da Taxa</Form.Label>
                <Form.Control type="text" value={editedNome}
                  onChange={(e) => setEditedNome(e.target.value)} className="form-control" id="inputName" placeholder="Nome" required />
              </FormGroup>

              <div className="gap-2" style={{ display: "flex", flexDirection: 'row' }}>
                <Form.Group controlId="formContacto">
                  <Form.Label>Peso Minimo</Form.Label>
                  <Form.Control type="number" className="form-control" value={peso_minimo}
                    onChange={(e) => setEditedpeso_minimo(e.target.value)} min={0} />
                </Form.Group>
                <Form.Group controlId="formInicioA">
                  <Form.Label>Valor Minimo</Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control" value={valor_minimo}
                    onChange={(e) => setEditedvalor_minimo(e.target.value)} min={0}
                  />
                </Form.Group>
              </div>
              <div className="gap-2" style={{ display: "flex", flexDirection: 'row' }}>
                <Form.Group controlId="formContacto">
                  <Form.Label>Peso Inicial</Form.Label>
                  <Form.Control type="number" className="form-control" value={peso_inicial}
                    onChange={(e) => setEditedpeso_inicial(e.target.value)} min={0} />
                </Form.Group>
                <Form.Group controlId="formInicioA">
                  <Form.Label>Peso Final</Form.Label>
                  <Form.Control
                    type="number"
                    className="form-control" value={peso_final}
                    onChange={(e) => setEditedpeso_final(e.target.value)} min={0}
                  />
                </Form.Group>
              </div>
              <Form.Group controlId="formInicioA">
                <Form.Label>Valor de cálculo</Form.Label>
                <Form.Control
                  type="number"
                  className="form-control" value={valor_calculo}
                  onChange={(e) => setEditedvalor_calculo(e.target.value)} min={0}
                />
              </Form.Group>
              <FormGroup className="form-group">
                <Form.Label>Entidades</Form.Label>
                <Select
                  options={options}
                  value={selectedOption}
                  onChange={handleChange}
                  placeholder="Selecione uma opção"
                  isSearchable
                  classNamePrefix='Select2' className="multi-select"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label>Aeroporto de origem</Form.Label>
                <Select
                  options={options3}
                  value={selectedOption3}
                  onChange={handleChange3}
                  placeholder="Selecione uma opção"
                  isSearchable
                  classNamePrefix='Select2' className="multi-select"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label>Aeroporto de destino</Form.Label>
                <Select
                  options={options4}
                  value={selectedOption4}
                  onChange={handleChange4}
                  placeholder="Selecione uma opção"
                  isSearchable
                  classNamePrefix='Select2' className="multi-select"
                />
              </FormGroup>
              <FormGroup className="form-group">
                <Form.Label>Tipo de carga</Form.Label>
                <Select
                  options={options2}
                  value={selectedOption2}
                  onChange={handleChange2}
                  placeholder="Selecione uma opção"
                  required
                  isSearchable
                  classNamePrefix='Select2' className="multi-select"
                />
              </FormGroup>


            </Form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showd} onHide={handleClosed}>
        <Modal.Header>
          <Modal.Title>Mais Detalhes da Taxa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FormGroup className="form-group">
              <Form.Label>Nome da Taxa</Form.Label>
              <Form.Control type="text" className="form-control" id="inputName" placeholder="Nome"
                value={editedNome} disabled />
            </FormGroup>

            <div className="gap-2" style={{ display: "flex", flexDirection: 'row' }}>
              <Form.Group controlId="formContacto">
                <Form.Label>Peso Minimo</Form.Label>
                <Form.Control type="number" className="form-control" value={peso_minimo}
                  onChange={(e) => setEditedpeso_minimo(e.target.value)} min={0} disabled />
              </Form.Group>
              <Form.Group controlId="formInicioA">
                <Form.Label>Valor Minimo</Form.Label>
                <Form.Control
                  type="number"
                  className="form-control" value={valor_minimo}
                  onChange={(e) => setEditedvalor_minimo(e.target.value)} min={0} disabled
                />
              </Form.Group>
            </div>
            <div className="gap-2" style={{ display: "flex", flexDirection: 'row' }}>
              <Form.Group controlId="formContacto">
                <Form.Label>Peso Inicial</Form.Label>
                <Form.Control type="number" className="form-control" value={peso_inicial}
                  onChange={(e) => setEditedpeso_inicial(e.target.value)} min={0} disabled />
              </Form.Group>
              <Form.Group controlId="formInicioA">
                <Form.Label>Peso Final</Form.Label>
                <Form.Control
                  type="number"
                  className="form-control" value={peso_final}
                  onChange={(e) => setEditedpeso_final(e.target.value)} min={0} disabled
                />
              </Form.Group>
            </div>
            <Form.Group controlId="formInicioA">
              <Form.Label>Valor de cálculo</Form.Label>
              <Form.Control
                type="number"
                className="form-control" value={valor_calculo}
                onChange={(e) => setEditedvalor_calculo(e.target.value)} min={0} disabled
              />
            </Form.Group>


            <FormGroup className="form-group">
              <Form.Label>Entidades</Form.Label>
              <Form.Control
                type="text"
                value={entidadeData}
                disabled
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label>Tipo de Carga</Form.Label>
              <Form.Control
                type="text"
                value={tipoCargaData}
                disabled
              />
            </FormGroup>

            <FormGroup className="form-group">
              <Form.Label>Aeroporto de origem</Form.Label>
              <Form.Control
                type="text"
                value={editAeroportoDe}
                disabled
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label>Aeroporto de destino</Form.Label>
              <Form.Control
                type="text"
                value={editAeroportoPara}
                disabled
              />
            </FormGroup>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosed}>
            Fechar
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoUtilizador(dados, entidades, aeroportos, permissoes) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [showd, setShowd] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');
  const [editEmail, setEditedEmail] = useState('');

  const [editContacto, setEditedContacto] = useState('');
  const [permissao, setPermissao] = useState('')
  const [editNumeroDoc, setEditedNumeroDoc] = useState('');
  const [editUsername, setEditedUsername] = useState('');
  const [entidadeData, setEntidadeData] = useState('');
  const [aeroportoData, setAeroportoData] = useState('');


  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);

  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleShowd = () => setShowd(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.u_nome);
    setEditedId(row.u_id);
    setEditedEmail(row.u_Email);
    setEditedContacto(row.u_MSISDN_contacto);
    setEditedNumeroDoc(row.u_numero_documento);
    setEditedUsername(row.u_nome_usuário);
    setSelectedOption(row.id_entidade);
    setSelectedOption2(row.u_aeroporto_id);
    setSelectedOption3(row.u_permissoes_id);

    handleShow();
  };

  const handleView = (row) => {
    setEditData(row);
    setEditedNome(row.u_nome);
    setEditedId(row.u_id);
    setEditedEmail(row.u_Email);
    setEditedContacto(row.u_MSISDN_contacto);
    setEditedNumeroDoc(row.u_numero_documento);
    setEditedUsername(row.u_nome_usuário);
    setEntidadeData(row.e_nome);
    setAeroportoData(row.a_nome);
    setPermissao(row.pp_nome);
    handleShowd();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.u_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleClosed = () => {
    setShowd(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/AtualizarUtilizador`, {
        'u_nome': editedNome,
        'u_Email': editEmail,
        'u_MSISDN_contacto': editContacto,
        'u_numero_documento': editNumeroDoc,

        'u_aeroporto_id': selectedOption2.value,
        'id_entidade': selectedOption.value,
        'u_permissoes_id': selectedOption3.value,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarUtilizador`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;

    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.u_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())

    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleChange2 = (selectedOption) => {
    setSelectedOption2(selectedOption);
  };

  const handleChange3 = (selectedOption) => {
    setSelectedOption3(selectedOption);
  };

  const options = entidades.map((item) => ({
    value: item.e_id,
    label: item.e_nome
  }));

  const options2 = aeroportos.map((item) => ({
    value: item.a_id,
    label: item.a_nome
  }));

  const options3 = permissoes.map((item) => ({
    value: item.pp_id,
    label: item.pp_nome
  }));


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Utilizadores</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>

                        <th className="tabletitle">
                          <div style={{ display: "flex", flexDirection: "row", gap: '25px', justifyContent: 'center' }}>
                            <span>SNo</span>
                            {/*  <Form.Check
                        type="checkbox"
                        /> */}
                          </div>
                        </th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Email</th>
                        <th className="tabletitle">Contacto</th>
                        <th className="tabletitle">Entidade</th>
                        <th className="tabletitle">Aeroporto</th>
                        <th className="tabletitle">Permissoes</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => {
                        //const valor = item.provincia.p_nome;

                        return (
                          <tr className="text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>{item.u_nome}</td>
                            <td>{item.u_Email}</td>
                            <td>{item.u_MSISDN_contacto}</td>
                            <td>{item.e_nome}</td>
                            <td>{item.a_nome}</td>
                            <td>{item.pp_nome}</td>
                            <td>
                              <span className="text-center align-middle" >
                                <ButtonGroup size="sm" className='flex-nowrap' >
                                  <OverlayTrigger placement="top" overlay={<Tooltip >Ver Mais</Tooltip>}>
                                    <Button className="me-1" key={item.u_id} onClick={() => handleView(item)}><i className="fa fa-eye"></i></Button>
                                  </OverlayTrigger>
                                  {
                                    permissoes.editar_utilizador == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                        <Button className="me-1" key={item.u_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }
                                  {
                                    permissoes.deletar_utilizador == 1 ? (
                                      <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                        <Button key={item.u_id} onClick={() => handleDeleteMethod(item)}>
                                          <i className="fa fa-trash"></i>
                                        </Button>
                                      </OverlayTrigger>
                                    ) : <></>
                                  }

                                </ButtonGroup>
                              </span>
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Editar Dados de Utilizador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}

              />
              <Form.Group controlId="formNome">
                <Form.Label>Nome de Utilizador</Form.Label>
                <Form.Control
                  type="text"
                  value={editUsername}
                  onChange={(e) => setEditedUsername(e.target.value)}

                />
              </Form.Group>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={editEmail}
                onChange={(e) => setEditedEmail(e.target.value)}

              />

            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Nome de Utilizador</Form.Label>
              <Form.Control
                type="text"
                value={editUsername}
                onChange={(e) => setEditedUsername(e.target.value)}

              />

            </Form.Group>
            <Form.Group controlId="formContacto">
              <Form.Label>Contacto</Form.Label>
              <Form.Control
                type="number"
                value={editContacto}
                onChange={(e) => setEditedContacto(e.target.value)}

                min={0}
              />
            </Form.Group>
            <Form.Group controlId="formContacto">
              <Form.Label>Numero de Documento de Identificacao</Form.Label>
              <Form.Control
                type="number"
                value={editNumeroDoc}
                onChange={(e) => setEditedNumeroDoc(e.target.value)}

                min={0}
              />
            </Form.Group>


            <FormGroup className="form-group">
              <Form.Label>Entidades</Form.Label>
              <Select
                options={options}
                value={selectedOption}
                onChange={handleChange}
                placeholder="Selecione uma opção"
                isSearchable
                classNamePrefix='Select2' className="multi-select"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label>Aeroporto</Form.Label>
              <Select
                options={options2}
                value={selectedOption2}
                onChange={handleChange2}
                placeholder="Selecione uma opção"
                isSearchable
                classNamePrefix='Select2' className="multi-select"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label>Perfil ou classe de permissão</Form.Label>
              <Select
                options={options3}
                value={selectedOption3}
                onChange={handleChange3}
                placeholder="Selecione uma opção"
                isSearchable
                classNamePrefix='Select2' className="multi-select"
              />
            </FormGroup>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showd} onHide={handleClosed}>
        <Modal.Header>
          <Modal.Title>Mais Detalhes do Utilizador</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formNome">
              <Form.Label>Nome de Utilizador</Form.Label>
              <Form.Control
                type="text"
                value={editUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                value={editEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
                disabled
              />
            </Form.Group>
            <Form.Group controlId="formContacto">
              <Form.Label>Contacto</Form.Label>
              <Form.Control
                type="number"
                value={editContacto}
                onChange={(e) => setEditedContacto(e.target.value)}
                disabled
                min={0}
              />
            </Form.Group>
            <Form.Group controlId="formContacto">
              <Form.Label>Numero de Documento de Identificacao</Form.Label>
              <Form.Control
                type="number"
                value={editNumeroDoc}
                onChange={(e) => setEditedNumeroDoc(e.target.value)}
                disabled
                min={0}
              />
            </Form.Group>

            <FormGroup className="form-group">
              <Form.Label>Entidade</Form.Label>
              <Form.Control
                type="text"
                value={entidadeData}
                disabled
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label>Aeroporto</Form.Label>
              <Form.Control
                type="text"
                value={aeroportoData}
                disabled
              />
            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label>Nome ou Classe de Permissão</Form.Label>
              <Form.Control
                type="text"
                value={permissao}
                disabled
              />
            </FormGroup>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosed}>
            Fechar
          </Button>

        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoPerfis(dados) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');

  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);

  const [expanded2, setExpanded2] = useState([]);
  const [selected2, setSelected2] = useState([]);

  const [loading, setLoading] = useState(true);

  const [expanded3, setExpanded3] = useState([]);
  const [selected3, setSelected3] = useState([]);

  const [checkboxValues, setCheckboxValues] = useState({
    createZonas: 0,
    alterZonas: 0,
    deleteZonas: 0,
    viewZonas: 0,

    createProvincias: 0,
    alterProvincias: 0,
    deleteProvincias: 0,
    viewProvincias: 0,

    createDistritos: 0,
    alterDistritos: 0,
    deleteDistritos: 0,
    viewDistritos: 0,

    createEntidades: 0,
    alterEntidades: 0,
    deleteEntidades: 0,
    viewEntidades: 0,

    createAeroportos: 0,
    alterAeroportos: 0,
    deleteAeroportos: 0,
    viewAeroportos: 0,

    createTerminais: 0,
    alterTerminais: 0,
    deleteTerminais: 0,
    viewTerminais: 0,

    createSessaoTerminais: 0,
    alterSessaoTerminais: 0,
    deleteSessaoTerminais: 0,
    viewSessaoTerminais: 0,

    createTipoCarga: 0,
    alterTipoCarga: 0,
    deleteTipoCarga: 0,
    viewTipoCarga: 0,

    createPerfis: 0,
    alterPerfis: 0,
    deletePerfis: 0,
    viewPerfis: 0,

    createUtilizadores: 0,
    alterUtilizadores: 0,
    deleteUtilizadores: 0,
    viewUtilizadores: 0,

    confirmScanPassagemOrigim: 0,
    validarDadosBalcaoOrigin: 0,
    confirmPagamentosOriginDestino: 0,
    controloCargaAeroportoConfirmRecepcaoOrigin: 0,
    confirmEntradaCargaDestino: 0,
    confirmComprimentoProcessoAduaneiroDestino: 0,
    confirmMovimentoCargaDestino: 0,
    confirmActualizarDetalhesCargaDestino: 0,
    confirmPagamentoDestino: 0,
    controloCargaValidarInformacaoDestino: 0,
    agenteTerminalConfirmRecepcaoCargaDestino: 0,
    congelarCargaDestinoOrigin: 0,

    createTaxas: 0,
    alterTaxas: 0,
    deleteTaxas: 0,
    viewTaxas: 0,

  });


  const handleCheckboxChange = (event, checkboxName) => {
    const isChecked = event.target.checked ? 1 : 0;
    setCheckboxValues({ ...checkboxValues, [checkboxName]: isChecked });

  };


  const handleToggle = (_event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (_event, nodeIds) => {
    setSelected(nodeIds);
  };

  const handleExpandClick = () => {
    setExpanded((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
    );
  };

  const handleToggle2 = (_event, nodeIds) => {
    setExpanded2(nodeIds);
  };

  const handleSelect2 = (_event, nodeIds) => {
    setSelected2(nodeIds);
  };

  const handleExpandClick2 = () => {
    setExpanded2((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
    );
  };

  const handleToggle3 = (_event, nodeIds) => {
    setExpanded3(nodeIds);
  };

  const handleSelect3 = (_event, nodeIds) => {
    setSelected3(nodeIds);
  };

  const handleExpandClick3 = () => {
    setExpanded3((oldExpanded) =>
      oldExpanded.length === 0 ? ['1', '20', '39', '58', '77', '96', '2', '9'] : [],
    );
  };

  const handleSendDataToServer = async () => {
    try {
      const token = localStorage.getItem('token');
      console.log('novo token', token);


      const postData = {
        pp_id: editId,
        pp_nome: editedNome,
        criar_zona: checkboxValues.createZonas,
        editar_zona: checkboxValues.alterZonas,
        deletar_zona: checkboxValues.deleteZonas,
        ver_zona: checkboxValues.viewZonas,

        criar_provincia: checkboxValues.createProvincias,
        editar_provincia: checkboxValues.alterProvincias,
        deletar_provincia: checkboxValues.deleteProvincias,
        ver_provincia: checkboxValues.viewProvincias,

        criar_distrito: checkboxValues.createDistritos,
        editar_distrito: checkboxValues.alterDistritos,
        ver_distrito: checkboxValues.viewDistritos,
        deletar_distrito: checkboxValues.deleteDistritos,

        criar_aeroporto: checkboxValues.createAeroportos,
        editar_aeroporto: checkboxValues.alterAeroportos,
        deletar_aeroporto: checkboxValues.deleteAeroportos,
        ver_aeroporto: checkboxValues.viewAeroportos,

        // entidades

        criar_tipo_carga: checkboxValues.createTipoCarga,
        editar_tipo_carga: checkboxValues.alterTipoCarga,
        deletar_tipo_carga: checkboxValues.deleteTipoCarga,
        ver_tipo_carga: checkboxValues.viewTipoCarga,

        criar_permissoes: checkboxValues.createPerfis,
        editar_permissoes: checkboxValues.alterPerfis,
        deletar_permissoes: checkboxValues.deletePerfis,
        ver_permissoes: checkboxValues.viewPerfis,

        criar_terminal: checkboxValues.createTerminais,
        editar_terminal: checkboxValues.alterTerminais,
        deletar_terminal: checkboxValues.deleteTerminais,
        ver_terminal: checkboxValues.viewTerminais,

        criar_sessao_do_terminal: checkboxValues.createSessaoTerminais,
        editar_sessao_do_terminal: checkboxValues.alterSessaoTerminais,
        deletar_sessao_do_terminal: checkboxValues.deleteSessaoTerminais,
        ver_sessao_do_terminal: checkboxValues.viewSessaoTerminais,

        criar_utilizador: checkboxValues.createUtilizadores,
        editar_utilizador: checkboxValues.alterUtilizadores,
        detelar_utilizador: checkboxValues.deleteUtilizadores,
        ver_utilizador: checkboxValues.viewUtilizadores,

        criar_taxa: checkboxValues.createTaxas,
        editar_taxa: checkboxValues.alterTaxas,
        deletar_taxa: checkboxValues.deleteTaxas,
        ver_taxa: checkboxValues.viewTaxas,

        confirmar_passagem_por_scan_origim: checkboxValues.confirmScanPassagemOrigim,
        validar_dados_como_balcao_origim: checkboxValues.validarDadosBalcaoOrigin,
        confirma_pagamentos_origim_e_destino: checkboxValues.confirmPagamentosOriginDestino,
        controlo_carga_aeroporto_confirma_recepcao_origim: checkboxValues.controloCargaAeroportoConfirmRecepcaoOrigin,
        confirmar_entrada_carga_destino: checkboxValues.confirmEntradaCargaDestino,
        Confirmar_cumprimento_de_processos_aduaneiros_destino: checkboxValues.confirmComprimentoProcessoAduaneiroDestino,
        confirmar_movimento_Carga_destino: checkboxValues.confirmMovimentoCargaDestino,
        confirmar_e_actualizarDetalhesCarga_destino: checkboxValues.confirmActualizarDetalhesCargaDestino,
        confirmar_pagamento_destino: checkboxValues.confirmPagamentoDestino,
        controlo_carga_validar_informacao_destino: checkboxValues.controloCargaValidarInformacaoDestino,
        agente_ter_confirma_recepcao_carga_destino: checkboxValues.agenteTerminalConfirmRecepcaoCargaDestino,
        congelar_carga_destino_origim: checkboxValues.congelarCargaDestinoOrigin,

      };

      const request = await axios.post(`${link}/api/AtualizarPerfilPermissoes`, postData,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(request.data);
      handleClose();

    } catch (err) {
      console.log(err);
    }

  }

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    console.log(row);

    setEditedNome(row.pp_nome);

    setCheckboxValues(prevState => ({
      ...prevState,
      createZonas: row.criar_zona,
      alterZonas: row.editar_zona,
      deleteZonas: row.deletar_zona,
      viewZonas: row.ver_zona,

      createProvincias: row.criar_provincia,
      alterProvincias: row.editar_provincia,
      deleteProvincias: row.deletar_provincia,
      viewProvincias: row.ver_provincia,

      createDistritos: row.criar_distrito,
      alterDistritos: row.editar_distrito,
      deleteDistritos: row.deletar_distrito,
      viewDistritos: row.ver_distrito,

      createAeroportos: row.criar_aeroporto,
      alterAeroportos: row.editar_aeroporto,
      deleteAeroportos: row.deletar_aeroporto,
      viewAeroportos: row.ver_aeroporto,

      createTipoCarga: row.criar_tipo_carga,
      alterTipoCarga: row.editar_tipo_carga,
      deleteTipoCarga: row.deletar_tipo_carga,
      viewTipoCarga: row.ver_tipo_carga,

      createPerfis: row.criar_permissoes,
      alterPerfis: row.editar_permissoes,
      deletePerfis: row.deletar_permissoes,
      viewPerfis: row.ver_permissoes,

      createTerminais: row.criar_terminal,
      alterTerminais: row.editar_terminal,
      deleteTerminais: row.deletar_terminal,
      viewTerminais: row.ver_terminal,

      createUtilizadores: row.criar_utilizador,
      alterUtilizadores: row.editar_utilizador,
      deleteUtilizadores: row.deletar_utilizador,
      viewUtilizadores: row.ver_utilizador,

      createTaxas: row.criar_taxa,
      alterTaxas: row.editar_taxa,
      deleteTaxas: row.deletar_taxa,
      viewTaxas: row.ver_taxa,

      createSessaoTerminais: row.criar_sessao_do_terminal,
      alterSessaoTerminais: row.editar_sessao_do_terminal,
      deleteSessaoTerminais: row.deletar_sessao_do_terminal,
      viewSessaoTerminais: row.ver_sessao_do_terminal,

      confirmScanPassagemOrigim: row.confirmar_passagem_por_scan_origim,
      validarDadosBalcaoOrigin: row.validar_dados_como_balcao_origim,
      confirmPagamentosOriginDestino: row.confirma_pagamentos_origim_e_destino,
      controloCargaAeroportoConfirmRecepcaoOrigin: row.controlo_carga_aeroporto_confirma_recepcao_origim,
      confirmEntradaCargaDestino: row.confirmar_entrada_carga_destino,
      confirmComprimentoProcessoAduaneiroDestino: row.Confirmar_cumprimento_de_processos_aduaneiros_destino,
      confirmMovimentoCargaDestino: row.confirmar_movimento_Carga_destino,
      confirmActualizarDetalhesCargaDestino: row.confirmar_e_actualizarDetalhesCarga_destino,
      confirmPagamentoDestino: row.confirmar_pagamento_destino,
      controloCargaValidarInformacaoDestino: row.controlo_carga_validar_informacao_destino,
      agenteTerminalConfirmRecepcaoCargaDestino: row.agente_ter_confirma_recepcao_carga_destino,
      congelarCargaDestinoOrigin: row.congelar_carga_destino_origim,
    }));

    setEditedId(row.pp_id);
    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.pp_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/ActualizarZona`, {
        'pp_nome': editedNome,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarPerfilPermissoes`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;

    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.pp_nome.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Perfis</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => (
                        <tr className="text-center" key={index}>
                          <td>{index + 1}</td>
                          <td>{item.pp_nome}</td>
                          <td>
                            <span className="text-center align-middle" >
                              <ButtonGroup size="sm" className='flex-nowrap' >
                                {/*  <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                  <Button className="me-1" key={item.pp_id}  onClick={() => handleEdit(item)} ><i className="fa fa-eye"></i></Button>
                                </OverlayTrigger> */}
                                {
                                  permissoes.editar_permissoes == 1 ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip >Modificar</Tooltip>}>
                                      <Button className="me-1" key={item.pp_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                    </OverlayTrigger>
                                  ) : <></>
                                }
                                {
                                  permissoes.deletar_permissoes == 1 ? (
                                    <OverlayTrigger placement="top" overlay={<Tooltip >Apagar</Tooltip>}>
                                      <Button key={item.pp_id} onClick={() => handleDeleteMethod(item)}>
                                        <i className="fa fa-trash"></i>
                                      </Button>
                                    </OverlayTrigger>
                                  ) : <></>
                                }

                              </ButtonGroup>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} fullscreen={true}  >
        <Modal.Header className="modal-header">
          <h6 className="modal-title">Adicionar Perfil</h6>
          <Button variant="" className="btn-close" type="button" onClick={handleClose}>
            <span aria-hidden="true">×</span></Button>
        </Modal.Header>

        <Modal.Body className="modal-body"> <div className="p-4">
          <Form className="form-horizontal">
            <FormGroup className="form-group">
              <Form.Label> Nome do Perfil</Form.Label>
              <Form.Control type="text" className="form-control" value={editedNome}
                onChange={(e) => setEditedNome(e.target.value)} />

            </FormGroup>
            <FormGroup className="form-group">
              <Form.Label> Permissões</Form.Label>
              <Row >
                <Col sm={12} xl={4} md={12} lg={6}>
                  <span id="tree3" className="tree">
                    <div>
                      <Button variant="primary" className='btn' onClick={handleExpandClick} >
                        {expanded.length === 0 ? 'Mostrar Todos' : 'Esconder Todos'}
                      </Button>

                      <TreeView className="treeview-1"
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        expanded={expanded}
                        selected={selected}
                        onNodeToggle={handleToggle}
                        onNodeSelect={handleSelect}
                        multiSelect
                      >
                        <TreeItem nodeId="1" label="Zonas, Provincias, Distritos, Entidades">

                          <TreeItem nodeId="2" label="Zonas">
                            <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Zonas`}
                                checked={checkboxValues.createZonas === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createZonas')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Zonas`}
                                checked={checkboxValues.alterZonas === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterZonas')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Zonas`}
                                checked={checkboxValues.deleteZonas === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteZonas')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Zonas`}
                                checked={checkboxValues.viewZonas === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewZonas')}
                              />
                            </div>
                          </TreeItem>
                          <TreeItem nodeId="3" label="Provincias">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Provincias`}
                                checked={checkboxValues.createProvincias === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createProvincias')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Provincias`}
                                checked={checkboxValues.alterProvincias === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterProvincias')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Provincias`}
                                checked={checkboxValues.deleteProvincias === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteProvincias')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Provincias`}
                                checked={checkboxValues.viewProvincias === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewProvincias')}
                              />
                            </div>
                          </TreeItem>
                          <TreeItem nodeId="4" label="Distritos">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Distritos`}
                                checked={checkboxValues.createDistritos === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createDistritos')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Distritos`}
                                checked={checkboxValues.alterDistritos === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterDistritos')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Distritos`}
                                checked={checkboxValues.deleteDistritos === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteDistritos')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Distritos`}
                                checked={checkboxValues.viewDistritos === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewDistritos')}
                              />
                            </div>
                          </TreeItem>
                          <TreeItem nodeId="5" label="Entidades">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Entidades`}
                                checked={checkboxValues.createEntidades === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createEntidades')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Entidades`}
                                checked={checkboxValues.alterEntidades === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterEntidades')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Entidades`}
                                checked={checkboxValues.deleteEntidades === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteEntidades')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Entidades`}
                                checked={checkboxValues.viewEntidades === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewEntidades')}
                              />
                            </div>
                          </TreeItem>
                        </TreeItem>
                      </TreeView>
                    </div>
                  </span>
                </Col>
                <Col sm={12} xl={4} md={12} lg={6}>
                  <span id="tree3" className="tree">
                    <div>
                      <Button variant="primary" className='btn' onClick={handleExpandClick2} >
                        {expanded2.length === 0 ? 'Mostrar todos' : 'Esconder todos'}
                      </Button>

                      <TreeView className="treeview-1"
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        expanded={expanded2}
                        selected={selected2}
                        onNodeToggle={handleToggle2}
                        onNodeSelect={handleSelect2}
                        multiSelect
                      >
                        <TreeItem nodeId="1" label="Aeroportos, Terminais, Sessão Terminais, Tipo de Carga">

                          <TreeItem nodeId="6" label="Aeroportos">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Aeroportos`}
                                checked={checkboxValues.createAeroportos === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createAeroportos')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Aeroportos`}
                                checked={checkboxValues.alterAeroportos === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterAeroportos')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Aeroportos`}
                                checked={checkboxValues.deleteAeroportos === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteAeroportos')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Aeroportos`}
                                checked={checkboxValues.viewAeroportos === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewAeroportos')}
                              />
                            </div>
                          </TreeItem>
                          <TreeItem nodeId="7" label="Terminais">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Terminais`}
                                checked={checkboxValues.createTerminais === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createTerminais')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Terminais`}
                                checked={checkboxValues.alterTerminais === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterTerminais')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Terminais`}
                                checked={checkboxValues.deleteTerminais === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteTerminais')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Terminais`}
                                checked={checkboxValues.viewTerminais === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewTerminais')}
                              />
                            </div>
                          </TreeItem>
                          <TreeItem nodeId="8" label="Sessão Terminais">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Sessão Terminais`}
                                checked={checkboxValues.createSessaoTerminais === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createSessaoTerminais')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Sessão Terminais`}
                                checked={checkboxValues.alterSessaoTerminais === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterSessaoTerminais')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Sessão Terminais`}
                                checked={checkboxValues.deleteSessaoTerminais === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteSessaoTerminais')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Sessão Terminais`}
                                checked={checkboxValues.viewSessaoTerminais === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewSessaoTerminais')}
                              />
                            </div>
                          </TreeItem>
                          <TreeItem nodeId="9" label="Tipo de Carga">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Tipo de Carga`}
                                checked={checkboxValues.createTipoCarga === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createTipoCarga')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Tipo de Carga`}
                                checked={checkboxValues.alterTipoCarga === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterTipoCarga')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Tipo de Carga`}
                                checked={checkboxValues.deleteTipoCarga === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteTipoCarga')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Tipo de Carga`}
                                checked={checkboxValues.viewTipoCarga === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewTipoCarga')}
                              />
                            </div>
                          </TreeItem>
                        </TreeItem>
                      </TreeView>
                    </div>
                  </span>
                </Col>
                <Col sm={12} xl={4} md={12} lg={6}>
                  <span id="tree3" className="tree">
                    <div>
                      <Button variant="primary" className='btn' onClick={handleExpandClick3} >
                        {expanded3.length === 0 ? 'Mostrar todos' : 'Esconder todos'}
                      </Button>

                      <TreeView className="treeview-1"
                        aria-label="controlled"
                        defaultCollapseIcon={<ExpandMoreIcon />}
                        defaultExpandIcon={<ChevronRightIcon />}
                        expanded={expanded3}
                        selected={selected3}
                        onNodeToggle={handleToggle3}
                        onNodeSelect={handleSelect3}
                        multiSelect
                      >
                        <TreeItem nodeId="10" label="Perfis, Utilizadores, Aprovações, Taxas">

                          <TreeItem nodeId="11" label="Perfis">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Perfis`}
                                checked={checkboxValues.createPerfis === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createPerfis')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Perfis`}
                                checked={checkboxValues.alterPerfis === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterPerfis')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Perfis`}
                                checked={checkboxValues.deletePerfis === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deletePerfis')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Perfis`}
                                checked={checkboxValues.viewPerfis === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewPerfis')}
                              />
                            </div>
                          </TreeItem>
                          <TreeItem nodeId="12" label="Utilizadores">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Utilizadores`}
                                checked={checkboxValues.createUtilizadores === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createUtilizadores')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Utilizadores`}
                                checked={checkboxValues.alterUtilizadores === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterUtilizadores')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Utilizadores`}
                                checked={checkboxValues.deleteUtilizadores === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteUtilizadores')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Utilizadores`}
                                checked={checkboxValues.viewUtilizadores === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewUtilizadores')}
                              />
                            </div>
                          </TreeItem>
                          <TreeItem nodeId="13" label="Aprovações">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Confirmar Passagem Por Scan na Origem`}
                                checked={checkboxValues.confirmScanPassagemOrigim === 1}
                                onChange={(e) => handleCheckboxChange(e, 'confirmScanPassagemOrigim')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Validar Dados de Origem`}
                                checked={checkboxValues.validarDadosBalcaoOrigin === 1}
                                onChange={(e) => handleCheckboxChange(e, 'validarDadosBalcaoOrigin')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Confirmar Pagamentos Origem`}
                                checked={checkboxValues.confirmPagamentosOriginDestino === 1}
                                onChange={(e) => handleCheckboxChange(e, 'confirmPagamentosOriginDestino')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Confirmar Recepcao no Controlo de Carga do Aeroporto de Origem`}
                                checked={checkboxValues.controloCargaAeroportoConfirmRecepcaoOrigin === 1}
                                onChange={(e) => handleCheckboxChange(e, 'controloCargaAeroportoConfirmRecepcaoOrigin')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Confirmar Entrada da Carga no Destino`}
                                checked={checkboxValues.confirmEntradaCargaDestino === 1}
                                onChange={(e) => handleCheckboxChange(e, 'confirmEntradaCargaDestino')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Confirmar cumprimento de Processo Aduaneiro no Destino`}
                                checked={checkboxValues.confirmComprimentoProcessoAduaneiroDestino === 1}
                                onChange={(e) => handleCheckboxChange(e, 'confirmComprimentoProcessoAduaneiroDestino')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Confirmar movimento de carga no destino`}
                                checked={checkboxValues.confirmMovimentoCargaDestino === 1}
                                onChange={(e) => handleCheckboxChange(e, 'confirmMovimentoCargaDestino')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Confirmar actualizacao de detalhes de carga`}
                                checked={checkboxValues.confirmActualizarDetalhesCargaDestino === 1}
                                onChange={(e) => handleCheckboxChange(e, 'confirmActualizarDetalhesCargaDestino')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Confirmar pagamento no destino`}
                                checked={checkboxValues.confirmPagamentoDestino === 1}
                                onChange={(e) => handleCheckboxChange(e, 'confirmPagamentoDestino')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Validar informacao de destino da carga`}
                                checked={checkboxValues.controloCargaValidarInformacaoDestino === 1}
                                onChange={(e) => handleCheckboxChange(e, 'controloCargaValidarInformacaoDestino')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Confirmar recepcao de carga no destino`}
                                checked={checkboxValues.agenteTerminalConfirmRecepcaoCargaDestino === 1}
                                onChange={(e) => handleCheckboxChange(e, 'agenteTerminalConfirmRecepcaoCargaDestino')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Congelar carga no destino`}
                                checked={checkboxValues.congelarCargaDestinoOrigin === 1}
                                onChange={(e) => handleCheckboxChange(e, 'congelarCargaDestinoOrigin')}
                              />
                            </div>
                          </TreeItem>
                          <TreeItem nodeId="14" label="Taxas">
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Criar Taxas`}
                                checked={checkboxValues.createTaxas === 1}
                                onChange={(e) => handleCheckboxChange(e, 'createTaxas')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Alterar Taxas`}
                                checked={checkboxValues.alterTaxas === 1}
                                onChange={(e) => handleCheckboxChange(e, 'alterTaxas')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Eliminar Taxas`}
                                checked={checkboxValues.deleteTaxas === 1}
                                onChange={(e) => handleCheckboxChange(e, 'deleteTaxas')}
                              />
                            </div>
                            <div style={{ width: '100%' }} >
                              <Form.Check
                                type={'checkbox'}
                                label={`Visualizar Taxas`}
                                checked={checkboxValues.viewTaxas === 1}
                                onChange={(e) => handleCheckboxChange(e, 'viewTaxas')}
                              />
                            </div>
                          </TreeItem>
                        </TreeItem>
                      </TreeView>
                    </div>
                  </span>
                </Col>
              </Row>
            </FormGroup>
          </Form>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="" className="btn ripple btn-primary" type="button" onClick={handleSendDataToServer}>
            Guardar
          </Button>
          <Button variant="" className="btn ripple btn-secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

function TabelaComPaginacaoCargas(dados) {
  const [termoDePesquisa, setTermoDePesquisa] = useState('');
  const [dadosFiltrados, setDadosFiltrados] = useState([]);
  const [show, setShow] = useState(false);
  const [alert, setAlert] = useState(false);
  const [editData, setEditData] = useState([]);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');

  const [deleteData, setDeleteData] = useState(null);
  const [deleteId, setDeletedId] = useState('');

  const handleShow = () => setShow(true);

  const handleAlert = () => setAlert(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.z_nome);
    setEditedId(row.z_id);
    handleShow();
  };

  const handleDeleteMethod = (row) => {
    setDeleteData(row);
    setDeletedId(row.z_id);
    handleAlert();
  }

  const handleClose = () => {
    setShow(false);
  };

  const handleCloseAlert = () => {
    setAlert(false);
  };

  const handleSave = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/ActualizarZona`, {
        'z_nome': editedNome,
        'id': editId,
      },
        {
          headers: {
            'Authorization': `${token}`
          }
        });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${url}/api/DeletarZona`, {
        'id': deleteId,
      },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      console.log(response.data);
      handleCloseAlert();
      setTermoDePesquisa('');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const dadosPaginados = dados;

    // Aplicar o filtro pelo termo de pesquisa
    const dadosFiltrados = dadosPaginados.filter((item) =>
      item.ca_nome_carga.toLowerCase().includes(termoDePesquisa.toLowerCase())
    );

    setDadosFiltrados(dadosFiltrados);
  }, [dados, termoDePesquisa]);


  const handlePesquisa = (e) => {
    setTermoDePesquisa(e.target.value);
  };


  return (
    <>
      <Row>
        <Col lg={12} xl={12} >
          <InputGroup className="mb-4">
            <span className="d-flex ms-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar..."
                value={termoDePesquisa}
                onChange={handlePesquisa}
              />
            </span>
            <InputGroup.Text className="btn btn-primary">
              <i className="fa fa-search" aria-hidden="true"></i>
            </InputGroup.Text>
          </InputGroup>
          <Card className="deleted-table">
            <Card.Header className="border-bottom-0 p-4 d-flex justify-content-between">
              <Card.Title className="tx-13">{dados.length} Cargas</Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="e-table pb-5">
                <div className="table-responsive" style={{ maxHeight: '50vh', overflowY: 'auto' }}>
                  <table className="table table-bordered text-nowrap mb-0">
                    <thead className="text-center align-middle" style={{ position: 'sticky', top: '0', zIndex: 2 }}>
                      <tr>
                        <th className="tabletitle">SNo</th>
                        <th className="tabletitle">Nome</th>
                        <th className="tabletitle">Descricao</th>
                        <th className="tabletitle">Origem</th>
                        <th className="tabletitle">Destino</th>
                        <th className="tabletitle">Acções</th>

                        {/* Adicione mais colunas conforme necessário */}
                      </tr>
                    </thead>
                    <tbody>
                      {dadosFiltrados.map((item, index) => (
                        <tr className="text-center" key={index}>
                          <td>{index + 1}</td>
                          <td>{item.ca_nome_carga}</td>
                          <td>{item.ca_descricao_carga}</td>
                          <td>{item.Nnome_aeroporto_origem}</td>
                          <td>{item.nome_aeroporto_destino}</td>
                          <td>
                            <span className="text-center align-middle" >
                              <ButtonGroup size="sm" className='flex-nowrap' >
                                
                                    <OverlayTrigger placement="top" overlay={<Tooltip >validacao</Tooltip>}>
                                      <Button className="me-1" key={item.z_id} onClick={() => handleEdit(item)}><i className="fa fa-edit"></i></Button>
                                    </OverlayTrigger>
                                 
                              </ButtonGroup>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Card.Body>

          </Card>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} fullscreen={true}>
        <Modal.Header>
          <Modal.Title>Aprovacos da Autoridade da Carga</Modal.Title>
          <Button variant="" className="btn-close" type="button" onClick={handleClose}>
            <span aria-hidden="true">×</span></Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
           <Vertical userData={editData} />
          </Form>
        </Modal.Body>
      </Modal>

      <Modal show={alert} onHide={handleCloseAlert}>
        <Modal.Header>
          <Modal.Title>Apagar Registo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formNome">
              <Form.Label>Nome</Form.Label>
              Deseja Realmente Eliminar o registo?
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAlert}>
            NAO
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            SIM
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}


export const ZonaList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/BuscarTodasZonas`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]);


  return TabelaComPaginacaoZonas(data);


};

export const PerfisList = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/BuscarTodosPerfisPermissoes`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]);


  return TabelaComPaginacaoPerfis(data);


};

export const UtilizadoresList = () => {

  const [data, setData] = useState([]);
  const [entidades, setEntidades] = useState([]);
  const [aeroportos, setAeroportos] = useState([]);
  const [permissoes, setPermissoes] = useState([]);

  useEffect(() => {

    fetch(`${url}/api/getEntidades`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setEntidades(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    fetch(`${url}/api/BuscarTodosAeroportos`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setAeroportos(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    fetch(`${url}/api/BuscarTodosPerfisPermissoes`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setPermissoes(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, []);

  const fetchData = () => {
    fetch(`${url}/api/BuscarTodosUtilizadores`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  /* useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/BuscarTodosUtilizadores`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, [data]); */

  useEffect(() => {
 
    fetchData();

    const intervalId = setInterval(() => {
      fetchData();
    }, 7000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return TabelaComPaginacaoUtilizador(data, entidades, aeroportos, permissoes);
};

export const ProvinciaList = () => {
  const [data, setData] = useState([]);
  const [zonas, setZonas] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/BuscarTodosProvincias`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, [data]);

  useEffect(() => {

    fetch(`${url}/api/BuscarTodasZonas`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setZonas(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return TabelaComPaginacaoProvincias(data, zonas);
};

export const DistritoList = () => {
  const [data, setData] = useState([]);
  const [provincia, setProvincia] = useState([]);


  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/BuscarTodosDistritos`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, [data]);

  useEffect(() => {

    fetch(`${url}/api/BuscarTodosProvincias`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setProvincia(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return TabelaComPaginacaoDistritos(data, provincia)
};

export const AeroportoList = () => {
  const [data, setData] = useState([]);
  const [provincia, setProvincia] = useState([]);


  useEffect(() => {

    fetch(`${url}/api/BuscarTodosProvincias`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setProvincia(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/BuscarTodosAeroportos`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, [data]);


  return TabelaComPaginacaoAeroportos(data, provincia);
};

export const TerminaisList = () => {
  const [data, setData] = useState([]);
  const [aeroporto, setAeroporto] = useState([]);

  useEffect(() => {

    fetch(`${url}/api/BuscarTodosAeroportos`)
      .then((response) => response.json())
      .then((data) => {
        setAeroporto(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, []);

  useEffect(() => {

    fetch(`${url}/api/BuscarTodosTerminais`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]);



  return TabelaComPaginacaoTerminais(data, aeroporto);
};

export const SessaoTerminaisList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {

    fetch(`${url}/api/getSessaoTermal`)
      .then((response) => response.json())
      .then((data) => {

        setData(data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]);


  return TabelaComPaginacaoSessaoTerminal(data);
};

export const TipoCargaList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/BuscarTodosTiposCarga`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]);


  return TabelaComPaginacaoTipoCarga(data);
};

export const EntidadeList = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);
  const [editData, setEditData] = useState(null);
  const [editedNome, setEditedNome] = useState('');
  const [editId, setEditedId] = useState('');

  const handleShow = () => setShow(true);

  const handleEdit = (row) => {
    setEditData(row);
    setEditedNome(row.z_nome);
    setEditedId(row.z_id);
    handleShow();
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post(`${url}/api/ActualizarZona`, {
        'z_nome': editedNome,
        'id': editId,
        'idUser': '13'
      });
      console.log(response.data);
      handleClose();

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/getEntidades`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setData(data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [data]);



  const tableInstance = useTable(
    {
      columns: COLUMNSEntidade,
      data: data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;


  return TabelaComPaginacaoEntidades(data);
};

export const TaxaList = () => {
  const [data, setData] = useState([]);
  const [entidades, setEntidades] = useState([]);
  const [tipoCarga, setTipoCarga] = useState([]);
  const [aeroporto, setAeroporto] = useState([]);

  useEffect(() => {

    fetch(`${url}/api/getEntidades`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setEntidades(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    fetch(`${url}/api/BuscarTodosTiposCarga`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setTipoCarga(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

    fetch(`${url}/api/BuscarTodosAeroportos`)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of objects
        setAeroporto(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, []);

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/gettaxas`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, [data]);


  return TabelaComPaginacaoTaxa(data, entidades, tipoCarga, aeroporto);
};

export const CargasAutoridadeCargaList = () => {
  const [data, setData] = useState([]);

  

  useEffect(() => {
    // Fetch data from your API endpoint here
    fetch(`${url}/api/buscarProcessoesPendentesScan`,{
      headers: {
        'Authorization': `${token}`
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });

  }, [data]);


  return TabelaComPaginacaoCargas(data);
};



//end userlist