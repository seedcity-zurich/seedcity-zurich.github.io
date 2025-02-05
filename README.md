# SeedCity Website
Welcome to the official repository of the [SeedCity](www.seedcity.ch) website.
# Table of Content
- [SeedCity Website](#seedcity-website)
- [Table of Content](#table-of-content)
- [What is SeedCity?](#what-is-seedcity)
- [How can you contribute to this website?](#how-can-you-contribute-to-this-website)
  - [Running the website locally](#running-the-website-locally)
  - [Adding to the website](#adding-to-the-website)
    - [Events](#events)
      - [Removing an old event](#removing-an-old-event)
      - [Adding a new event](#adding-a-new-event)
    - [Images for the Gallery](#images-for-the-gallery)
    - [Requested features](#requested-features)
    - [Further questions](#further-questions)
- [Thanks](#thanks)

# What is SeedCity?
We are an open community, consisting of both ETH students, as well as people from the Höngg neighborhood. In our community garden, we build on shared responsibility and self-initiative. All members have the opportunity to get involved and unfold their interests - be it in the organization or in garden design. Together, we maintain all beds and garden elements and celebrate bountiful and healthy harvests. We share both the work and the harvest.

# How can you contribute to this website?
## Running the website locally
1. First, [clone this repository](https://www.geeksforgeeks.org/how-to-git-clone-a-remote-repository/) to your computer.
2. You will now need to start a webserver to correctly display the downloaded files. There are multiple ways of doing this. Two possible methods are as follow:
   1. If you are using linux or MacOS (should also work on Windows) and have python installen (you can check this by running `which python3` in your terminal, if there is no output, you don't have python installed) you can run a webserver on your local network.
      * open a terminal and `cd` into the directory you have this repository saved
      * run `python3 -m http.server 8081` (or any 4-digit number instead of `8081`)
      * open a browser and open [localhost:8081](localhost:8081). The Browser should open the SeedCity homepage. You can also open the website on a different device (such as a tablet or phone) by replacing `localhost` with the local ip of the computer that is running the webserver. On linux you can find your ip by running `ip a`. It should be of the form `192.168.x.xxx`.
      * when you are done, close your terminal window to close the webserver.
    2. If you are using VS Code, there is an addon to automatically create a webserver called [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
       * Just as described in the previous method, you can access this website from a different device.
3. If you now edit and save a file locally and refresh the webpage, you should see your changes.
## Adding to the website
Feel free to add to the website by making a [pull request](https://github.blog/developer-skills/github/beginners-guide-to-github-creating-a-pull-request/) or [opening an issue](https://www.geeksforgeeks.org/issues-in-github/). The following sections should explain how to go about updating specific sections.
### Events
#### Removing an old event
This is straingforward: in the file `events.html` remove the event and make a pull request. (Alternatively open an issue and tell us to remove it.) If you remove the last event, please uncomment the "No Events planned" section.
#### Adding a new event
You can easily add a new event by modifying the `events.html` file. Events should be ordered by how soon they are going to take place in descending order, i.e. an event that will take place in 2 weeks should be __above__ an event that will take place in 6 months. If no other events are currently in the file, please add your event __after__ the heading and comment out the "No Events planned" section.

Below you will find an example event. You can copy-paste this event and modify it as you need for the event you want to add.

```html
<!-- Test Event -->
<div class="flex-container">
  <div class="flex-event-date">
    <div class="event-date">
      <h1>25 Oct 23</h1>
      <h2>🕐 12:00 - 14:00 <br>📌 SeedCity</h2>
    </div>
  </div>
  <div class="event-info">
    <H2>Annual Test Event</H2>
    <p>Join us for our annual Test Event! We will be celebrating the end of the growing season with a potluck, music, and games. Bring your favorite dish to share and enjoy the bounty of the garden.
      dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. More filler text.
    </p>
  </div>
</div>
<!-- End of Test Event -->
```

Once you have added your event, save your version of `events.html` and make a pull request.

### Images for the Gallery
Simply add any images you want to add to the website to the folder `images/gallery_images`. The website is set up so that these images will automatically be added to the gallery. Once you added the images, just make a pull request.
### Requested features
If you want specific things added/removed from the website, please open an issue or send us an <a href="mailto:seedcity@ethz.ch">email</a>. While you can also implement specific features yourself and open a pull request, there is no guarantee that we will accept this pull request. So, as to not waste your time, you probably want to contact us beforehand. Overall, the code in this repository should stay as simple as possible so as to make it easy to maintain and to add to for nonprogrammers.
### Further questions
If you still have questions or need a hand contributing to the website, open up an issue or send us an <a href="mailto:seedcity@ethz.ch">email</a>. Don't be shy :)

# Thanks
Thanks to the whole board of SeedCity and everyone involved for making SeedCity the wonderful place it is. Also thanks to GitHub for hosting our website.
