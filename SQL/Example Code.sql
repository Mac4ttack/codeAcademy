--with example


WITH previous_query AS (
SELECT customer_id,
       COUNT(subscription_id) as subscriptions
FROM orders
GROUP BY customer_id)
SELECT customers.customer_name,
previous_query.subscriptions
FROM previous_query
JOIN customers
	ON customers.customer_id = previous_query.customer_id;


--Union example (stack exact same tables on top of eachother)
SELECT *
FROM newspaper
UNION
SELECT *
FROM online;