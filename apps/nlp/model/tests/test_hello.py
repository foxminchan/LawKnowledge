"""Hello unit test module."""

from model.hello import hello


def test_hello():
    """Test the hello function."""
    assert hello() == "Hello model"
