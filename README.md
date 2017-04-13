# RemedyInventoryManager
Chrome extension that allows searching for a HP laptop's specs using Chrome APIs.

# Disclaimer
**This source code is truncated!** If you would like to know how the rest of it works, feel free to talk to me.

# Why was this made?
During my internship at L'Oréal, my manager asked me if I knew of a way to add laptops to our BMC Remedy asset inventory without having to type everything. After some fiddling around with a USB barcode scanner, this is the result.

# How does it work?
It's quite simple.

1. Scan the laptop's serial number (usually found on the box or under the hardware itself). 
2. The extension will now redirect to HP Partsurfer. (http://partsurfer.hp.com/)
3. A prompt requesting a username and the client's name will pop up.
4. The extension will automatically log in and fill in the form.

That's it! Really simple. 