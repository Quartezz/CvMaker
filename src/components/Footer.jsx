export default function Footer() {
    return (
        <footer id="footer">
             <p>
          Copyright ©
          <script>
            document.write(new Date().getFullYear())
          </script>
          kamilmachel
        </p>
        <a href="https://github.com/Quartezz" target="_blank">
          <i class="fab fa-github"></i></a>
        </footer>
    )
}