import mysql.connector

mydb = mysql.connector.connect(
    host = "localhost",
    user = "root",
    passwd = "@denis_13#"
    )

print("Connected successfully")