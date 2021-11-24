# Banglore Home Prices Prediction

Uses a Linear Regression model from sklearn to predict home prices in Banglore based on location, area, number of bathrooms, and number of bedrooms.

![alt text](https://github.com/aaWang27/BHP/blob/master/website.png)

## Steps
1. Collect data.
2. Clean data.
3. Create Linear Regression model and export.
4. Create Python Flask server.
5. Create website UI.
6. Set up Amazon EC2 server.

## Process for Opening Website
1. Set up WinSCP. Connect to Amazon EC2 server.
2. Copy 'BHP' folder into WinSCP.
3. Use verification key and following code to connect to ubuntu. 
```
ssh -i "C:\Users\slcccc\.ssh\bhp.pem" ubuntu@ec2-18-222-253-124.us-east-2.compute.amazonaws.com
```
4. Run nginx. 
```
sudo service nginx start
```
5. Run server.py file to start Python Flask server.
```
python3 /home/ubuntu/BHP/server/server.py
```
6. Open url in browser.

  [ec2-18-222-253-124.us-east-2.compute.amazonaws.com]
