// Footer.jsx
const Footer = () => {
  return (
    <footer className="text-white mt-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About</li>
            <li>Features</li>
            <li>Works</li>
            <li>Career</li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Help</h4>
          <ul className="space-y-2">
            <li>Customer Support</li>
            <li>Delivery Details</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Links</h4>
          <ul className="space-y-2">
            <li>Free eBooks</li>
            <li>Development Tutorial</li>
            <li>How to - Blog</li>
            <li>YouTube Playlist</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
