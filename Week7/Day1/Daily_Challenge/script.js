// Daily Challenge : Creating Objects
console.log('Daily Challenge : Creating Objects')

// What You Will Learn :
// Create Objects
// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.
// Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// Instantiate a new Video instance and call the watch() method.
// Instantiate a second Video instance with different values.

class Video {
    constructor(title, uploader, time) {
        this.title = title              // title (a string)
        this.uploader = uploader        // uploader (a string, the person who uploaded it)
        this.time = time                // time (a number, the duration of the video - in seconds)
    }
    // Create a method called watch() which displays a string as follows:
    // “uploader parameter watched all time parameter of title parameter!”
    watch() {
        return `${this.uploader} watched all ${this.time} seconds of ${this.title} video!`
    }
}

console.log('Instantiate a new Video instance and call the watch() method:')
const newVideo = new Video("Harry Potter", "Julia", 7200)
console.log(newVideo.watch())
console.log('\nInstantiate a second Video instance with different values:')
const newVideo1 = new Video("SuperMan", "Egor", 6800)
console.log(newVideo1.watch())

console.log('\nDaily Challenge : Creating Objects - Bonus\n\n');
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.

const videosData = [
    { title: "The Matrix", uploader: "Alice", time: 5400 },
    { title: "Inception", uploader: "Bob", time: 4800 },
    { title: "Interstellar", uploader: "Charlie", time: 10200 },
    { title: "The Dark Knight", uploader: "Dave", time: 7200 },
    { title: "Pulp Fiction", uploader: "Eve", time: 6600 }
];

// Bonus: Loop through the array to instantiate those instances.
videosData.forEach(videoData => {
    const video = new Video(videoData.title, videoData.uploader, videoData.time);
    console.log(video.watch());
});
