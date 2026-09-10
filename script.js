var EpisodeCount = 5;
var CurrentEpisode = 1;
const EpisodeLinks = ["filler", "https://open.spotify.com/embed/episode/2SpWBV4kAhVNoLxANQhROO?utm_source=generator&si=5241e66ad16c4645", "https://open.spotify.com/embed/episode/2eRmdP9mAEbgzVxyzF8aK6?utm_source=generator&si=93e39e7bab334589", "https://open.spotify.com/embed/episode/6V9HtENbnegcDvPOgUuPCj?utm_source=generator&si=e64deccdb84547e9", "https://open.spotify.com/embed/episode/1Sen3ePks9G4hoU4xJTL4v?utm_source=generator&si=926f942849fd4c5d", "https://open.spotify.com/embed/episode/3PSS6iY4puaUj13nXbHxw1?utm_source=generator&si=3d77bb45d72d43b9"];
const discriptions = ["filler", 
"Statement of Nathan Watts, regarding an encounter on Old Fishmarket Close, Edinburgh.",
 "Statement of Joshua Gillespie regarding his time in the possession of an apparently empty wooden casket.",
  "Statement of Amy Patel, regarding the alleged disappearance of her acquaintance Graham Folger.",
   "Statement of Dominic Swain, regarding a book briefly in his possession in the winter of 2012.",
    "Statement Of Keiran Woodward regarding items recovered from the refuse of 93 Lancaster Road, Walthamstowe."];

function counterUp() {

    if (CurrentEpisode < EpisodeCount) {
        CurrentEpisode = CurrentEpisode + 1;
        document.getElementById("ep-count").innerHTML = CurrentEpisode;
        document.getElementById("Episoder").src = EpisodeLinks[CurrentEpisode];
} else {
    CurrentEpisode = 1
    document.getElementById("ep-count").innerHTML = CurrentEpisode;
    document.getElementById("Episoder").src = EpisodeLinks[CurrentEpisode];
}
document.getElementById("discribe").innerHTML = discriptions[CurrentEpisode];
}

function counterDown() {
    if (CurrentEpisode == 1) {
        CurrentEpisode = EpisodeCount;
        document.getElementById("ep-count").innerHTML = CurrentEpisode;
        document.getElementById("Episoder").src = EpisodeLinks[CurrentEpisode];
        
} else {
    CurrentEpisode = CurrentEpisode - 1
    document.getElementById("ep-count").innerHTML = CurrentEpisode;
    document.getElementById("Episoder").src = EpisodeLinks[CurrentEpisode];
}
document.getElementById("discribe").innerHTML = discriptions[CurrentEpisode];
}
