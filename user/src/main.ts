function main(): void {

    function clearCookie(e: MouseEvent): void {
        e.preventDefault();
        document.cookie = "";
        document.location.href = "http://example/";
    }

    document.getElementById("exit").onclick = (e)=> clearCookie(e);

}

main();