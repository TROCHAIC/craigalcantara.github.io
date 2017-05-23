/* global $ _ opspark */

$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        
        let billyCount = 0;
        $('#image-billy').on("click", function(e){
            billyCount++
            if(billyCount >= data.images.billy.length){billyCount = 0;}
            $('#image-billy').attr('src', data.images.billy[billyCount])
        })
        
         topRated = data.discography.topRated;
         
         topRated = _.map(topRated, function(curData){
                
                return ($('<p>').text(curData.title).on('click', function(e){
                    $('#top-rated-img').attr('src',curData["art"] )
                }))
            });
            
            _.forEach(topRated, function(recording){
                $('#list-top-rated').append(recording);
            });
            
       $('#list-top-rated').before($('<img>').attr('id', 'top-rated-img').attr("src", data.discography.topRated[0].art))
    
    
        
        $('#sidebar')
            .append($('<section>').attr("id", "section-recordings")
            .append($('<h2>').text("General Recordings"))
            .append($('<img>').attr('id', 'general-img').attr("src", data.discography.recordings[0].art))
            .append($('<ul>').attr("id", "list-recordings"))
        
            );
            
       
            
        let recordings = data.discography.recordings;
        _.map(recordings, function(data){
            $('#list-recordings').append($('<p>').attr("class", "title").text(data.title).on('click', function(e){
                $('#general-img').attr('src', data["art"])
            })  )
        })
        
let rider = data.rider;      

    var createTable = function(rider){
    var createRow = function(rider){
        var $row = $("<tr>");
        var $type = $("<td>").text(rider.type);
        var $desc = $("<td>").text(rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    }
    var $table = $("<table>").attr('id','rider-table');
    var $rows = rider.map(createRow);
    $table.append($rows);
    return $table;
};



$('<div>').append($('<h3>').text("Rider Data")).append(createTable(rider)).appendTo('.content');
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});


