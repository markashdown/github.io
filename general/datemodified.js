// Adds date modified to an HTML file
// Mark Ashdown, June 2001

// Get num of seconds since start of 1970 or zero if error
lastmod = Date.parse(document.lastModified); 

if(lastmod == 0)
{ 
  document.write("Updated: unknown");  
} 
else 
{ 
  time = new Date();
  time.setTime(lastmod);
  month="#";
  switch (time.getMonth())		// Change month to three letters
  { 
    case 0:  month="Jan"; break; 
    case 1:  month="Feb"; break; 
    case 2:  month="Mar"; break; 
    case 3:  month="Apr"; break; 
    case 4:  month="May"; break; 
    case 5:  month="Jun"; break; 
    case 6:  month="Jul"; break; 
    case 7:  month="Aug"; break; 
    case 8:  month="Sep"; break; 
    case 9:  month="Oct"; break; 
    case 10: month="Nov"; break; 
    case 11: month="Dec"; break; 
  }
  year=""+ ((time.getYear()%1900)+1900);  // Get string for four-digit year
  
  // Write update date to HTML file
  document.write( "Updated: "+time.getDate()+" "+month+" "+year );
}
