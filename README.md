# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Haolong Chen

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?
No. I would not use only a unit test for the full message feature because sending a message involves multiple parts working together, such as the text box, send button, network/server, and receiving user. This is better tested with an integration or end-to-end test.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?
Yes. I would use a unit test because the max message length rule is a small, specific function. We can test whether messages over 80 characters are rejected and messages 80 characters or shorter are accepted.