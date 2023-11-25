"""Hello unit test module."""

from chat-svc.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello chat-svc"
