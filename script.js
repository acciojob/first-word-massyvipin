function firstWord(s) {
 s = s.trim();
	const spaceIndex = s.indexOf(' ');
	if(spaceIndex=== -1){
		return s;	
	}
	return s.subsrting(0,spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
/alert(firstWord(s));
