
<img src="https://www.stylegods.com/wp-content/uploads/2018/11/bobbi8.png" alt="Logo" width="100%">


# Bobbi-Brown Rest API

Bobbi Brown Cosmetics is a global premium beauty brand that empowers women to embrace and enhance their individual beauty. The website of bobbi-brown provides all the beauty products that are offered by the company.

This is a rest API for getting details of some products that is offered by the orginal website. Its has login/logout functionalities along side Authentication for the user from the token which is generated useing JWT(JSONWEBTOKEN). Can add/remove product to the cart of specific user profile this part is also in the backend. The sum of total amount of the products & no. of product in cart is also provided.

This was a collaborative project of six member to create a clone of bobbi-brown website. This Project was made as a part of construct week curriculum of MASAI School.


## Tech Stack

- **Node**

- **Express**

- **MongoDB** (For Storage)

- **Heroku** (For Deployment)


## API Reference

#### API Link:- https://bobbi-brown-api.herokuapp.com/

#### Get all items

```http
  GET /product
```

#### Get item

```http
  GET /product/${page}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `string` | **Required**. Filter the product data as per pages |


#### Get Full Profuct detail by `product_id`

```http
  GET /product/product/${product_id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product_id`      | `string` | **Required**. Get full details of the product |


#### Search item by keyword.

```http
  GET /search/${keyword}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `keyword`      | `string` | **Required**. Product that are related to the keyword as sent as a result |\


#### Register

```http
  POST /register
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name`|`string`|**Required**|
| `email` | `string` | **Required**. Email should be Unique |
| `password`  | `string` | **Required** (No password specification as such) |

#### Login

```http
  POST /login
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**. |
| `password`  | `string` | **Required** |


#### GetCart of Specific (Logged In) User.

```http
  GET /cart/getcart
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authentication Token`|`string`|**Required** (which need to be get the user detail)|

#### Add Product to Specific (Logged In) User Cart.

```http
  POST /cart/add/${product_id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product_id`      | `string` | **Required**. ProductId from the the products |

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authentication Token`|`string`|**Required** (which need to be get the user detail)|

#### Remove specific single Product / Decrease the Quanitiy of specific Product from Specific (Logged In) User Cart.

```http
  POST /cart/remove/${product_id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product_id`      | `string` | **Required**. ProductId from the the products |

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authentication Token`|`string`|**Required** (which need to be get the user detail)|

#### Remove all the product of given id from Specific (Logged In) User Cart.

```http
  POST /cart/delete/${product_id}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `product_id`      | `string` | **Required**. ProductId from the the products |

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authentication Token`|`string`|**Required** (which need to be get the user detail)|


#### Make the cart of Specific user Empty

```http
  POST /cart/removeall
```

| Header | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authentication Token`|`string`|**Required** (which need to be get the user detail)|


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB`: MongoDB database Link.

`KEY`: JSONWEBTOKEN key for hashing that password. 

`PORT`: Which is given by Heroku.


## Contributor

[@Aakash Yadav](https://github.com/aakash-0)
## Limitation

After makeing all the changes to the cart we are return whole user instead of only cart that issue.
